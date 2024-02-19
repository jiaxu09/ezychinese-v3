'use client'
import LiteracyPractice from '@/app/(books)/_components/literacy-practice'
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface WritingProps {
  bookId: string
  chapterId: string
}

const Writing = ({ bookId, chapterId }: WritingProps) => {
  const { data, isFetched } = useQuery(
    useGetLiteracyByChapter(`${bookId}-${chapterId}`)
  )

  return <LiteracyPractice data={data} />
}

export default Writing
