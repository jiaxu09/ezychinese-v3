import { useGetHanYuBooks } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Books from './_components/books'

export const metadata = {
  title: '汉语',
  description: '暨南大学汉语1-3册.',
}

const HanYuBooksPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetHanYuBooks())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className="container mx-auto">
          <Books />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default HanYuBooksPage
