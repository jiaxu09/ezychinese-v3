import { type Metadata } from "next"
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

export async function generateMetadata({
  params,
}: LiteracyProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese-v3.vercel.app/"),
    title: `中文 | 第${id}册 - 生字`,
    description: '暨南大学中文1-6册.',
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
