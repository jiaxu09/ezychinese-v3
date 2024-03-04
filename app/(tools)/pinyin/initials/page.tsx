import { useGetChinesePinyinByCategory } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Initials from '../_components/initials'

const InitialsPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetChinesePinyinByCategory('initials'))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Initials />
    </HydrationBoundary>
  )
}

export default InitialsPage
