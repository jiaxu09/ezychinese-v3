import React, { Suspense } from 'react'
import QiHunEpisodes from './_components/episodes'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { useGetQiHunEpisodes } from '@/lib/react-query/queries'

export const metadata = {
  title: 'Learning by Watching',
  description:
    'Dive into immersive language learning experiences with our Learning by Watching.',
}

const HikaruNoGoPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetQiHunEpisodes())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" container flex flex-col ">
        <div className="flex items-center justify-center w-full pb-10">
          <h1 className=" text-lg md:text-5xl">棋魂</h1>
        </div>
        <Suspense fallback={null}>
          <QiHunEpisodes />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default HikaruNoGoPage
