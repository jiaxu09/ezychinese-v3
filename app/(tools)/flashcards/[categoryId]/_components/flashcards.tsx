'use client'
import { useGetFlashcardsByCategory } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Image from 'next/image'

interface FlashcardsProps {
  category: string
}
const Flashcards = ({ category }: FlashcardsProps) => {
  const { data: flashcards, isFetched } = useQuery(
    useGetFlashcardsByCategory(category)
  )

  if (isFetched && !flashcards) {
    notFound()
  }

  return (
    <div>
      <Carousel className='w-full max-w-lg'>
        <CarouselContent>
          {flashcards?.words.map((word, index) => (
            <CarouselItem key={index}>
              <div className='flip-card h-[450px] w-[500px] p-10'>
                <div className=' flip-card-inner relative h-full w-full'>
                  <div className='flip-card-front'>
                    <p className='title'>{word}</p>
                  </div>
                  <div className='flip-card-back relative h-full w-full'>
                    <Image
                      src={flashcards.wordsImages[index].url}
                      fill
                      alt={`ezyChinese flashcards ${word}`}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Flashcards
