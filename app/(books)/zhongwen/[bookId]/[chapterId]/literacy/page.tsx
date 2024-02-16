import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Literacy from '../_components/literacy'

interface LiteracyProps {
  params: {
    bookId: string
    chapterId: string
  }
}
const LiteracyPage = async ({ params }: LiteracyProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetLiteracyByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Suspense fallback={null}>
          <Literacy bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default LiteracyPage
