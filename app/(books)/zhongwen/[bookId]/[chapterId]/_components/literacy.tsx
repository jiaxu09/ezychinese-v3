'use client'
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import LiteracyPractice from '@/app/(books)/_components/literacy-practice'
import { notFound } from 'next/navigation'

interface LiteracyProps {
  bookId: string
  chapterId: string
}

const Literacy = ({ bookId, chapterId }: LiteracyProps) => {
  const { data, isFetched, error } = useQuery(
    useGetLiteracyByChapter(`${bookId}-${chapterId}`)
  )

  if (!data) {
    notFound()
  }
  return <LiteracyPractice characters={data.answers} />
}

export default Literacy
