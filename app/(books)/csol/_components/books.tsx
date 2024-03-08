'use client'
import { useGetCSOLBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { notFound } from 'next/navigation'
import React from 'react'
import BooksList from '../../_components/books-list'
import Breadcrumb from '../../_components/breadcrumb'

const Books = () => {
  const { data, isFetched } = useQuery(useGetCSOLBooks())
  if (isFetched && !data) {
    notFound()
  }

  return (
    <>
      <Breadcrumb type='csol' isEnd={false} />
      <BooksList books={data} type='csol' />
    </>
  )
}

export default Books
