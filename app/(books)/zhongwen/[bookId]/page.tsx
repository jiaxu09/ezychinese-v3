import { type Metadata } from 'next'
import { useGetChaptersByBookId } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React from 'react'
import Chapters from './_components/chapters'

interface BookDetailsProps {
  params: {
    bookId: string
  }
}

export async function generateMetadata({
  params
}: BookDetailsProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `中文 | 第${id}册`,
    description: '暨南大学中文1-6册.'
  }
}

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChaptersByBookId(params.bookId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=' container mx-auto'>
          <Chapters slug={params.bookId} />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default BookDetailsPage
