import React from 'react'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetChineseIdiomsByUserId } from '@/lib/react-query/queries'
import Idioms from './_components/idioms'
import { supabaseServer } from '@/lib/supabase/server'

export const metadata = {
  title: 'Chinese Idioms',
  description:
    'Chinese Idioms are common sayings, proverbs, or idiomatic phrases that convey a figurative meaning.'
}

const ChineseIdiomsPage = async () => {
  const supabase = await supabaseServer()
  const { data } = await supabase.auth.getSession()
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetChineseIdiomsByUserId(data.session?.user.id)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container mx-auto flex flex-col items-center py-0 md:py-10'>
        <h1 className=' py-1 text-center text-xl text-primary md:text-4xl'>
          Idioms
        </h1>
        <div className='w-full'>
          <Idioms />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default ChineseIdiomsPage
