'use client'
import WordsCard from '@/app/(books)/_components/words-card'
import { useGetWordsByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface WordsProps {
  bookId: string
  chapterId: string
}

const Words = ({ bookId, chapterId }: WordsProps) => {
  const { data, isFetched } = useQuery(
    useGetWordsByChapter(`${bookId}-${chapterId}`)
  )

  if (isFetched && data?.words.length === 0) {
    return (
      <div className=" flex items-center justify-center ">
        <h1 className=" text-primary">
          Coming <span className=" text-crayola">soon</span>{' '}
        </h1>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center space-y-4">
      <WordsCard data={data} />
    </div>
  )
}

export default Words
