import React from 'react'
import CreateButton from './_components/create-button'
import EditSwitch from './_components/edit-switch'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { useGetChineseIdioms } from '@/lib/react-query/queries'
import Idioms from './_components/idioms'

export const metadata = {
  title: 'Chinese Idioms',
  description:
    'Chinese Idioms are common sayings, proverbs, or idiomatic phrases that convey a figurative meaning.',
}

const ChineseIdiomsPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChineseIdioms(0))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto flex flex-col items-center py-0 md:py-10">
        <h1 className=" text-xl md:text-4xl text-center py-2 text-primary">
          Idioms
        </h1>
        <div className="grow">
          <Idioms />
        </div>
        <div className="hidden md:block fixed bottom-20 right-10 md:right-48">
          <div className="flex gap-6 items-center justify-center">
            <CreateButton />
            <EditSwitch />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default ChineseIdiomsPage
