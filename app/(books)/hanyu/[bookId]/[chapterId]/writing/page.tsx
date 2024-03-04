import { type Metadata } from 'next'
import React, { Suspense } from 'react'
import Writings from '../_components/writings'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetHanYuWritingssByChapter } from '@/lib/react-query/queries'

interface WritingsPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}
export async function generateMetadata({
  params
}: WritingsPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${params.bookId}册 第${params.chapterId}单元`,
    description: '汉字'
  }
}
const WritingPage = async ({ params }: WritingsPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetHanYuWritingssByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Writings bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default WritingPage
