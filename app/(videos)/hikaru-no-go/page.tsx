import React from 'react'
import QiHunHeader from './_components/header'
import QiHunEpisodes from './_components/episodes'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { useGetQiHunEpisodes } from '@/lib/react-query/queries'

const HikaruNoGoPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetQiHunEpisodes())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" container flex flex-col ">
        <QiHunHeader />
        <QiHunEpisodes />
      </div>
    </HydrationBoundary>
  )
}

export default HikaruNoGoPage
