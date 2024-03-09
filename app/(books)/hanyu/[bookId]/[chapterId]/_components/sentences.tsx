'use client'

import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import CarouselItems from './Carousel-items'
import CardContents from './card-contents'
import { useQuery } from '@tanstack/react-query'
import { useGetHanYuSentencesByChapter } from '@/lib/react-query/queries'
import { notFound } from 'next/navigation'
import NoContent from '@/components/no-content'

interface SentencesProps {
  bookId: string
  chapterId: string
}
const Sentences = ({ bookId, chapterId }: SentencesProps) => {
  const { data: hanyu_sentences, isFetched } = useQuery(
    useGetHanYuSentencesByChapter(`${bookId}-${chapterId}`)
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

export default Sentences
