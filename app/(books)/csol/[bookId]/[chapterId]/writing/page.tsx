import { type Metadata } from "next"
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React, { Suspense } from 'react'

import Writing from "../_components/writing"

interface CSOLWriteProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params,
}: CSOLWriteProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese-v3.vercel.app/"),
    title: `CSOL | 第${id}册 - Writing`,
    description: '',
  }
}

const CSOLWritePage = async ({ params }: CSOLWriteProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetLiteracyByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Suspense fallback={null}>
          <Writing bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLWritePage
