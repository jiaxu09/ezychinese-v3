import { useGetChinesePinyinByCategory } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Finals from '../_components/finals'

const FinalsPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChinesePinyinByCategory('finals'))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Finals />
    </HydrationBoundary>
  )
}

export default FinalsPage
