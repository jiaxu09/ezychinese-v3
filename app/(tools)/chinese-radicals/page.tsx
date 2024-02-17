import React from 'react'
import Radicals from './_components/radicals'
import CreateButton from './_components/create-button'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { supabaseServer } from '@/lib/supabase/server'
import EditSwitch from './_components/edit-switch'
import Image from 'next/image'

export const metadata = {
  title: 'Chinese Radicals',
  description:
    'Chinese radicals are the building blocks of Chinese characters.',
}

const ChineseRadicalsPage = async () => {
  const queryClient = new QueryClient()
  const supabase = supabaseServer()

  await queryClient.prefetchQuery(useGetChineseRadicals(supabase, 0))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto flex flex-col items-center py-0 md:py-10">
        <h1 className=" text-xl md:text-4xl text-center py-2 text-primary">
          Radicals
        </h1>
        <div className=" flex-grow">
          <Radicals />
        </div>
        <div className="hidden md:block fixed bottom-0 md:bottom-20 right-10 md:right-48">
          <div className="flex gap-6 items-center justify-center">
            <CreateButton />
            <EditSwitch />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default ChineseRadicalsPage
