import { type Metadata } from "next"
import { useGetLiteracyByChapter, useGetVideosByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Literacy from '../_components/literacy'
import Video from "../_components/video"

interface VideoProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params,
}: VideoProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese.app"),
    title: `中文 | 第${id}册 - 视频`,
    description: '暨南大学中文1-6册.',
  }
}

const VideoPage = async ({ params }: VideoProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetVideosByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className=" min-h-[80vh]">
        <Suspense fallback={null}>
          <Video bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default VideoPage
