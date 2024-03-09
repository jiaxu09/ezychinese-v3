import React from 'react'
import { type Metadata } from 'next'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetHanYuUnits } from '@/lib/react-query/queries'
import Lessons from './_components/lessons'

interface HanYuUnitPageProps {
  params: {
    bookId: string
  }
}

export async function generateMetadata({
  params
}: HanYuUnitPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${id}册`,
    description: ''
  }
}

const HanYuUnitPage = async ({ params }: HanYuUnitPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetHanYuUnits(params.bookId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=' container mx-auto'>
          <Lessons bookId={params.bookId} />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default HanYuUnitPage
