'use client'
import { useGetChineseBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { notFound } from 'next/navigation'
import React from 'react'
import BooksList from '../../_components/books-list'
import Breadcrumb from '../../_components/breadcrumb'

const Books = () => {
  const { data, isFetched } = useQuery(useGetChineseBooks())
  if (isFetched && !data) {
    notFound()
  }

  return (
    <>
      <Breadcrumb type='zhongwen' isEnd={false} />
      <BooksList books={data} type='zhongwen' />
    </>
  )
}

export default Books
