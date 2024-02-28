import { useGetQiHunEpisodeDetails } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import EpisodeDetails from './_components/episode-details'
import Link from 'next/link'

interface EpisodePageProps {
  params: {
    episode: string
  }
}
const EpisodePage = async ({ params }: EpisodePageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetQiHunEpisodeDetails(params.episode))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container flex flex-col items-center justify-center">
        <Link href="/hikaru-no-go">
          <h1 className=" text-center text-lg md:text-3xl ">棋魂</h1>
        </Link>
        <div className=" text-center text-lg md:text-xl py-4">
          <span>第</span>
          {params.episode}
          <span>集</span>
        </div>
        <div className="w-full">
          <EpisodeDetails episode={params.episode} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default EpisodePage
