import { type Metadata } from 'next'
import React from 'react'
import Words from '../_components/words'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetHanYuWordsByChapter } from '@/lib/react-query/queries'

interface WordsPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}
export async function generateMetadata({
  params
}: WordsPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${params.bookId}册 第${params.chapterId}单元`,
    description: '生字'
  }
}

const WordsPage = async ({ params }: WordsPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetHanYuWordsByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='mx-auto max-w-3xl'>
        <Words bookId={params.bookId} chapterId={params.chapterId} />
      </div>
    </HydrationBoundary>
  )
}

export default WordsPage
