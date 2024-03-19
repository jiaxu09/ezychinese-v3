'use client'
import { useGetFlashcardsByCategory } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HanziSound from '@/components/hanzi-sound'
import { FlashcardArray } from 'react-quizlet-flashcard'

interface FlashcardsProps {
  category: string
}
const Flashcards = ({ category }: FlashcardsProps) => {
  const [isFlipped, setFlipped] = useState(false)
  const [flashcards, setFlashcards] = useState<
    {
      id: number
      frontHTML: React.JSX.Element
      backHTML: React.JSX.Element
    }[]
  >([])

  const handleFlip = () => {
    setFlipped(!isFlipped)
  }

  const { data, isFetched } = useQuery(useGetFlashcardsByCategory(category))

  useEffect(() => {
    if (data) {
      const cards = data.words.map((item, index) => ({
        id: index,
        frontHTML: (
          <div className='flex h-full w-full flex-col items-center justify-center gap-8  py-10'>
            <div className='h-8 w-8'>
              <HanziSound word={item} />
            </div>
            <div
              onClick={handleFlip}
              className='flex h-2/3 w-full items-start justify-center text-xl md:text-5xl'
            >
              {item}
            </div>
          </div>
        ),
        backHTML: (
          <div
            onClick={handleFlip}
            className='relative flex h-full w-full items-center justify-center'
          >
            <Image
              className=' object-contain'
              src={data.wordsImages[index].url}
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              alt={`ezyChinese flashcards ${item}`}
            />
          </div>
        )
      }))
      setFlashcards(cards)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (isFetched && !flashcards) {
    notFound()
  }

  return (
    <div className=' flex w-full items-center justify-center'>
      {flashcards && <FlashcardArray cards={flashcards} />}
    </div>
  )
}

export default Flashcards
