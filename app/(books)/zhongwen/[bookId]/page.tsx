import { useGetChaptersByBookId } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Chapters from './_components/chapters'

interface BookDetailsProps {
  params: {
    bookId: string
  }
}

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChaptersByBookId(params.bookId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=" container mx-auto">
          <h1 className="text-xl md:text-4xl text-center py-4 md:py-8">
            选择练习册
          </h1>
          <Chapters slug={params.bookId} />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default BookDetailsPage
