import { type Metadata } from "next"

import { useGetSingByChapter } from '@/lib/react-query/queries'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Singing from "../_components/singing"


interface CSOLSingProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params,
}: CSOLSingProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese-v3.vercel.app/"),
    title: `CSOL | ${id} - Singing`,
    description: '',
  }
}

const CSOLSingPage =async ({ params }: CSOLSingProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetSingByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Suspense fallback={null}>
          <Singing bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLSingPage
