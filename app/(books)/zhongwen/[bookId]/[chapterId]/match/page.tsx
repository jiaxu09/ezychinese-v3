import { type Metadata } from 'next'
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Match from '../_components/match'

interface MatchProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params
}: MatchProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `中文 | 第${id}册 - 记忆游戏`,
    description: '暨南大学中文1-6册.'
  }
}

const MatchPage = async ({ params }: MatchProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetLiteracyByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='mx-auto min-h-[80vh] max-w-3xl'>
        <Suspense fallback={null}>
          <Match bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default MatchPage
