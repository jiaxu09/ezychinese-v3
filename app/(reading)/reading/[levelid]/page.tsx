import { type Metadata } from 'next'
import React from 'react'
import ReadingList from './_components/reading-list'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { useFetchStoriesByLevel } from '@/lib/react-query/queries'

interface ReadingLevelPageProps {
  params: {
    levelid: string
  }
}

export async function generateMetadata({
  params
}: ReadingLevelPageProps): Promise<Metadata> {
  const level = params.levelid

  if (!level) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `Leveled Reading - ${level}`,
    description:
      'ezyChinese readings leveled by HSK.HSK-leveled reading provides a structured path, motivates progress, and opens doors to educational and professional opportunities.'
  }
}

const ReadingLevelPage = async ({ params }: ReadingLevelPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useFetchStoriesByLevel(params.levelid))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='flex flex-col'>
        <ReadingList levelId={params.levelid}/>
      </main>
    </HydrationBoundary>
  )
}

export default ReadingLevelPage
