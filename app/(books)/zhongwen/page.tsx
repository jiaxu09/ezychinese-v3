import { useGetChineseBooks } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Books from './_components/books'

export const metadata = {
  title: '中文',
  description: '暨南大学中文1-6册.',
}

const ChineseBooksPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChineseBooks())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=" container mx-auto">
          <Books />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default ChineseBooksPage
