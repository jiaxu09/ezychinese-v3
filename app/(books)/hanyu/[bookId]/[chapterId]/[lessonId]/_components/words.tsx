'use client'
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import { Volume2 } from 'lucide-react'
import React from 'react'
import CarouselItems from './Carousel-items'
import { useQuery } from '@tanstack/react-query'
import { useGetHanYuWordsByChapter } from '@/lib/react-query/queries'
import { notFound } from 'next/navigation'
import NoContent from '@/components/no-content'
import supabaseUrl from '@/lib/utils'

interface WordsProps {
  bookId: string
  chapterId: string
  lessonId: string
}

const Words = ({ bookId, chapterId, lessonId }: WordsProps) => {
  const { data: hanyu_words, isFetched } = useQuery(
    useGetHanYuWordsByChapter(`${bookId}-${chapterId}-${lessonId}`)
  )
  const handleSound = (url: string) => {
    const audio = new Audio(supabaseUrl(url))
    audio.play()
  }

  if (!hanyu_words) {
    notFound()
  }
  if (hanyu_words.length === 0) {
    return <NoContent />
  }
  return (
    <CarouselItems>
      {hanyu_words?.map((word, index) => (
        <CarouselItem key={index}>
          <Card>
            <CardContent className='flex flex-col items-center justify-center space-y-4 md:h-[60vh]'>
              <div
                aria-label='hanzi sound'
                role='button'
                onClick={() => handleSound(word.audio)}
              >
                <Volume2 className='h-8 w-8 text-crayola ' />
              </div>
              <ruby>
                <span className=' inline-block text-3xl md:text-[6rem]'>
                  {word.hanzi}
                </span>
                <rt className=' text-xl text-gray-600 md:text-[5rem]'>
                  {word.pinyin}
                </rt>
              </ruby>
              <p className=' text-lg text-gray-600 md:text-[3rem]'>
                {word.english}
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselItems>
  )
}

export default Words
