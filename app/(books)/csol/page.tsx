import { useGetCSOLBooks, useGetChineseBooks } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import React from 'react'
import Books from './_components/books'

export const metadata = {
  title: 'CSOL',
  description: '',
}

const CSOLPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetCSOLBooks())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=" container mx-auto">
          <Books />
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default CSOLPage
