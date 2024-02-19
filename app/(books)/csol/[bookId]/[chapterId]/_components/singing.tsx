'use client'

import { useGetSingByChapter } from '@/lib/react-query/queries'
import { rgbDataURL } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface SingProps {
  bookId: string
  chapterId: string
}

const Singing = ({ bookId, chapterId }: SingProps) => {
  const { data: sing, isFetched } = useQuery(
    useGetSingByChapter(`${bookId}-${chapterId}`)
  )

  return (
    <div className="flex w-full md:w-4/5 mx-auto flex-col items-center justify-center py-4 space-y-4">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <Image
          className=" rounded-lg object-contain"
          src={sing?.singImg?.url!}
          placeholder="blur"
          blurDataURL={rgbDataURL(216, 222, 233)}
          width={sing?.singImg.width}
          height={sing?.singImg.height}
          alt="ezyChinese - Sing"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <ReactAudioPlayer
          className=""
          src={sing?.singMp3.url}
          controls
          controlsList="nodownload noremoteplayback"
        />
      </div>
    </div>
  )
}

export default Singing
