'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import supabaseUrl from '../../../../../lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useFetchStoriesByLevel } from '@/lib/react-query/queries'
import { notFound } from 'next/navigation'

interface ReadingListProps {
  levelId: string
}
const ReadingList = ({ levelId }: ReadingListProps) => {
  const { data: stories, isFetched } = useQuery(useFetchStoriesByLevel(levelId))
  if (isFetched && !stories) {
    notFound()
  }
  return (
    <div className='grid grid-cols-2 md:grid-cols-5'>
      {stories?.map((item, index) => (
        <Link
          href={`/reading/${levelId}/${item.slug.toLowerCase()}`}
          className='block'
          key={index}
        >
          <div className='relative'>
            <Image
              alt={`ezyChinese reading ${item.en_title}`}
              src={supabaseUrl(`${item.thumbnail}`)}
              className='object-container rounded-bl-3xl rounded-tr-3xl'
              width={256}
              height={256}
              priority
            />
          </div>

          <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
            <strong className='font-medium'>{item.zh_title}</strong>

            <span className='hidden sm:block sm:h-px sm:w-8 sm:bg-crayola'></span>

            <p className='mt-0.5 text-gray-500 sm:mt-0'>{item.en_title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ReadingList
