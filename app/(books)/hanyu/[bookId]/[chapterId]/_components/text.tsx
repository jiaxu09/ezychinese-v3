'use client'
import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import CarouselItems from './Carousel-items'
import CardContents from './card-contents'
import NoContent from '@/components/no-content'
import { notFound } from 'next/navigation'
import { useGetHanYuTextsByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

interface TextProps {
  bookId: string
  chapterId: string
}

const Text = ({ bookId, chapterId }: TextProps) => {
  const { data: hanyu_sentences, isFetched } = useQuery(
    useGetHanYuTextsByChapter(`${bookId}-${chapterId}`)
  )

  if (!hanyu_sentences) {
    notFound()
  }
  if (hanyu_sentences.length === 0) {
    return <NoContent />
  }
  return (
    <CarouselItems>
      {hanyu_sentences.map((item, index) => (
        <CarouselItem key={index}>
          <CardContents
            audio={item.audio}
            image={item.image}
            sentence={item.sentence}
          />
        </CarouselItem>
      ))}
    </CarouselItems>
  )
}

export default Text
