import { type Metadata } from 'next'
import React, { Suspense } from 'react'
import Sentences from '../_components/sentences'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetHanYuSentencesByChapter } from '@/lib/react-query/queries'

interface SentencesPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}
export async function generateMetadata({
  params
}: SentencesPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${params.bookId}册 第${params.chapterId}单元`,
    description: '句子'
  }
}
const SentencesPage = async ({ params }: SentencesPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetHanYuSentencesByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Sentences bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default SentencesPage
