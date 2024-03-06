import { type Metadata } from 'next'
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React, { Suspense } from 'react'

import Writing from '../_components/writing'

interface CSOLWriteProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params
}: CSOLWriteProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `CSOL | ${id} - Writing`,
    description: ''
  }
}

const CSOLWritePage = async ({ params }: CSOLWriteProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetLiteracyByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Writing bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLWritePage
