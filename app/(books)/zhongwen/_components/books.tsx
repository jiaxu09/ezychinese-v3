'use client'
import { useGetChineseBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { notFound } from 'next/navigation'
import React from 'react'
import BooksList from '../../_components/books-list'

const Books = () => {
  const { data, isFetched } = useQuery(useGetChineseBooks())
  if (isFetched && !data) {
    notFound()
  }

  return (
  <>
  <h1 className="text-xl md:text-4xl text-center py-4 md:py-8">选择课本</h1>
  <BooksList books={data} type="zhongwen" />
  </>
  )
}

export default Books
