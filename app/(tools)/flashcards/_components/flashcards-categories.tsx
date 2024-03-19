'use client'
import { Button } from '@/components/ui/button'
import { useGetFlashcardsCategories } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const FlashcardsCategories = () => {
  const { data: categories, isFetched } = useQuery(useGetFlashcardsCategories())

  if (isFetched && !categories) {
    notFound()
  }
  return (
    <div className='grid grid-cols-3 gap-6 py-4 md:grid-cols-6 md:gap-10 md:py-10'>
      {categories?.map((category, index) => (
        <Link href={`/flashcards/${category}`} key={index}>
          <Button className='w-full' variant='outline'>
            {category}
          </Button>
        </Link>
      ))}
    </div>
  )
}

export default FlashcardsCategories
