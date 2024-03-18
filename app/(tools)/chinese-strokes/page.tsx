import { useGetChineseStrokes } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React from 'react'
import StrokesTable from './_components/strokes-table'

const ChineseStrokesPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChineseStrokes())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container mx-auto flex flex-col items-center pb-4 md:py-2'>
        <h1 className='py-1 text-center text-xl text-primary md:text-4xl'>
          Full Chinese Character Strokes List
        </h1>
        <StrokesTable />
      </div>
    </HydrationBoundary>
  )
}

export default ChineseStrokesPage
