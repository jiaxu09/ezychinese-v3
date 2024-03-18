import { useGetFlashcardsCategories } from '@/lib/react-query/queries'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import React from 'react'
import FlashcardsCategories from './_components/flashcards-categories'

export const metadata = {
  title: 'Chinese Flashcards',
  description: 'Explore Engaging Chinese Flashcards by Categories'
}
const FlashCardsPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetFlashcardsCategories())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container mx-auto flex flex-col items-center py-0 md:py-10'>
        <h1 className=' py-1 text-center text-xl text-primary md:text-4xl'>
          Flashcards
        </h1>
        <FlashcardsCategories />
      </div>
    </HydrationBoundary>
  )
}

export default FlashCardsPage
