'use client'
import { useGetReadingByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface ReadingProps {
  bookId: string
  chapterId: string
}

const Reading = ({ bookId, chapterId }: ReadingProps) => {
  const { data, isFetched } = useQuery(
    useGetReadingByChapter(`${bookId}-${chapterId}`)
  )

  if (!data) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="flex flex-col">
        {data?.reading.map((chineseLine, index) => (
          <div className=" text-center" key={index}>
            <div className="flex items-center text-lg md:text-2xl">
              {chineseLine
                .replace(/ /g, '')
                .replace(/\s/g, '')
                .replace('，', '')
                .replace('。', '')
                .replace('，', '')
                .replace(',', '')
                .replace(';', '')
                .trim()
                .split('')
                .map((c, index1) => (
                  <ruby key={index1}>
                    <span className="text-lg md:text-3xl text-gray-600 px-2 inline-block">
                      {c}
                    </span>
                    <rt className=" text-lg ">
                      {data?.readingPinyin[index]
                        ?.split(' ')
                        [index1]?.replace(/ /g, '')
                        .replace('，', '')
                        .replace(',', '')
                        .replace('。', '')
                        .replace(/\s/g, '')}
                    </rt>
                  </ruby>
                ))}
            </div>
            {data?.readingEng && data?.readingEng.length > 0 && (
              <div className="text-sm md:text-xl text-gray-500 italic p-2">
                {data?.readingEng[index].trim()}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {data?.readingMp3 && data?.readingMp3?.url && (
          <ReactAudioPlayer
            src={data.readingMp3?.url}
            controls
            controlsList="nodownload noremoteplayback"
          />
        )}
      </div>
    </div>
  )
}

export default Reading
