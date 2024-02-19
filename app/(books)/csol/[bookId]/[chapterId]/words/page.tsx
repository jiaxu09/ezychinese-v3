import { useGetWordsByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Words from '../_components/words'

interface CSOLWordsProps {
  params: {
    bookId: string
    chapterId: string
  }
}
const CSOLWordPage = async ({ params }: CSOLWordsProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetWordsByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Suspense fallback={null}>
          <Words bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLWordPage
