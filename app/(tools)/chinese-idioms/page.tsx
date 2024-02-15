import React from 'react'
import CreateButton from './_components/create-button'
import EditSwitch from './_components/edit-switch'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { supabaseServer } from '@/lib/supabase/server'
import { useGetChineseIdioms } from '@/lib/react-query/queries'
import Idioms from './_components/idioms'
import Image from 'next/image'

export const metadata = {
  title: 'Chinese Idioms',
  description:
    'Chinese Idioms are common sayings, proverbs, or idiomatic phrases that convey a figurative meaning.',
}

const ChineseIdiomsPage = async () => {
  const queryClient = new QueryClient()
  const supabase = supabaseServer()

  await queryClient.prefetchQuery(useGetChineseIdioms(supabase, 0))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto flex flex-col items-center py-0 md:py-10">
        <h1 className=" text-xl md:text-4xl text-center py-2 text-primary">
          Chinese Idioms
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
      <div className=" absolute bottom-[5%] left-12 md:bottom-[15%] md:left-[35%] w-10 md:w-20">
        <Image
          src="/images/logo2.svg"
          width={159}
          height={134}
          alt="ezyChinese logos"
          priority
        />
      </div>
      <div className=" absolute top-[10%] right-[10%] md:top-[15%] md:left-[65%] md:w-16 w-10 rotate-12">
        <Image
          src="/images/logo3.svg"
          width={101}
          height={102}
          alt="ezyChinese logo"
          priority
        />
      </div>
    </HydrationBoundary>
  )
}

export default ChineseIdiomsPage
