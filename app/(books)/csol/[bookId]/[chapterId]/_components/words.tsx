'use client'
import WordsCard from '@/app/(books)/_components/words-card'
import NoContent from '@/components/no-content'
import { useGetWordsByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React from 'react'

interface WordsProps {
  bookId: string
  chapterId: string
}

const Words = ({ bookId, chapterId }: WordsProps) => {
  const { data, isFetched } = useQuery(
    useGetWordsByChapter(`${bookId}-${chapterId}`)
  )

  if (!data) {
    notFound()
  }

  if (isFetched && data?.words.length === 0) {
    return (
      <div>
        <NoContent />
      </div>
    )
  }
  return (
    <div className='flex items-center justify-center space-y-4'>
      <WordsCard data={data} />
    </div>
  )
}

export default Words
