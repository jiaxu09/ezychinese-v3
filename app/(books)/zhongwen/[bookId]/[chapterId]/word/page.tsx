import { type Metadata } from "next"
import { useGetWordsByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Words from "../_components/words"


interface WordsProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params,
}: WordsProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese-v3.vercel.app/"),
    title: `中文 | 第${id}册 - 词语`,
    description: '暨南大学中文1-6册.',
  }
}

const WordsPage = async ({ params }: WordsProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetWordsByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className=" min-h-[80vh]">
        <Suspense fallback={null}>
          <Words bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default WordsPage
