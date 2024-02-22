'use client'
import { useGetCSOLBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { notFound } from 'next/navigation'
import React from 'react'
import BooksList from '../../_components/books-list'

const Books = () => {
  const { data, isFetched } = useQuery(useGetCSOLBooks())
  if (isFetched && !data) {
    notFound()
  }

  return (
    <>
      <h1 className="text-xl md:text-4xl text-center py-4 md:py-8">
        Select a Book
      </h1>
      <BooksList books={data} type="csol" />
    </>
  )
}

export default Books
