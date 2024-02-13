import React from 'react'
import Radicals from './_components/radicals'
import CreateButton from './_components/create-button'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { supabaseServer } from '@/lib/supabase/server'

const ChineseRadicalsPage = async () => {
  const queryClient = new QueryClient()
  const supabase = supabaseServer()

  await queryClient.prefetchQuery(useGetChineseRadicals(supabase))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto flex flex-col items-center gap-6 ">
        <h1 className=" text-2xl md:text-4xl text-center pb-6">
          Chinese Radicals
        </h1>
        <div className="grow">
          <Radicals />
        </div>

        <div className="fixed bottom-20 right-10 md:right-48">
          <CreateButton />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default ChineseRadicalsPage
