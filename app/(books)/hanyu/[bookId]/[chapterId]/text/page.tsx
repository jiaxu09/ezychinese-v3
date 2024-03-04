import { type Metadata } from 'next'
import React, { Suspense } from 'react'
import Text from '../_components/text'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetHanYuTextsByChapter } from '@/lib/react-query/queries'

interface TextsPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params
}: TextsPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${params.bookId}册 第${params.chapterId}单元`,
    description: '课本'
  }
}

const TextsPage = async ({ params }: TextsPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetHanYuTextsByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Text bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default TextsPage
