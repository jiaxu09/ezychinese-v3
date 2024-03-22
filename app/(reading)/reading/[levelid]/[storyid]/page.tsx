import { type Metadata } from 'next'
import React from 'react'
import StoryDetails from './_components/story-details'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { useFetchStoryBySlug } from '@/lib/react-query/queries'

interface ReadingLevelPageProps {
  params: {
    levelid: string
    storyid: string
  }
}

export async function generateMetadata({
  params
}: ReadingLevelPageProps): Promise<Metadata> {
  const level = params.levelid
  const story = params.storyid

  if (!level) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `${story} - ${level}`,
    description: `ezyChinese readings leveled by HSK. ${story} ${level} `
  }
}

const StoryPage = async ({ params }: ReadingLevelPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useFetchStoryBySlug(params.storyid))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=' '>
        <StoryDetails levelId={params.levelid} storyId={params.storyid} />
      </div>
    </HydrationBoundary>
  )
}

export default StoryPage
