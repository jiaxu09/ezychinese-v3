import { useGetChinesePinyinByCategory } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import WholeSyllables from '../_components/whole-syllables'

const WholeSyllablesPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetChinesePinyinByCategory('whole syllables')
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WholeSyllables />
    </HydrationBoundary>
  )
}

export default WholeSyllablesPage
