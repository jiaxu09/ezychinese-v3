import React from 'react'
import { type Metadata } from 'next'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetFlashcardsByCategory } from '@/lib/react-query/queries'
import Flashcards from './_components/flashcards'

interface FlashcardsDetailsPageProps {
  params: {
    categoryId: string
  }
}

export async function generateMetadata({
  params
}: FlashcardsDetailsPageProps): Promise<Metadata> {
  const category = params.categoryId

  if (!category) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `Chinese Flashcards - ${category}`,
    description: `Explore Engaging Chinese Flashcards ${category}`
  }
}

const FlashcardsDetailsPage = async ({
  params
}: FlashcardsDetailsPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetFlashcardsByCategory(params.categoryId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container mx-auto flex flex-col items-center py-0 md:py-10'>
        <h1 className=' py-1 text-center text-xl text-primary md:text-4xl'>
          {params.categoryId}
        </h1>
        <Flashcards category={params.categoryId} />
      </div>
    </HydrationBoundary>
  )
}

export default FlashcardsDetailsPage
