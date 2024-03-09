'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useGetHanYuWritingssByChapter } from '@/lib/react-query/queries'
import { notFound } from 'next/navigation'
import NoContent from '@/components/no-content'
import LiteracyPractice from '@/app/(books)/_components/literacy-practice'

interface WritingsProps {
  bookId: string
  chapterId: string
}
const Writings = ({ bookId, chapterId }: WritingsProps) => {
  const { data: hanyu_writings, isFetched } = useQuery(
    useGetHanYuWritingssByChapter(`${bookId}-${chapterId}`)
  )

  const [characters, setCharacters] = useState<string[]>([])

  useEffect(() => {
    if (hanyu_writings && hanyu_writings?.length > 0) {
      const hanziArray: string[] = hanyu_writings?.flatMap(item => item.hanzi)
      setCharacters(hanziArray)
    }
  }, [hanyu_writings])

  if (!hanyu_writings) {
    notFound()
  }
  if (hanyu_writings.length === 0) {
    return <NoContent />
  }

  return <LiteracyPractice characters={characters} />
}

export default Writings
