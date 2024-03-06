import { type Metadata } from 'next'
import { useGetReadingByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Reading from '../_components/reading'

interface CSOLReadingProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params
}: CSOLReadingProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `CSOL | ${id} - Reading`,
    description: ''
  }
}

const CSOLReadingPage = async ({ params }: CSOLReadingProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetReadingByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Reading bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLReadingPage
