'use client'
import { useGetHanYuBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import supabaseUrl from '@/lib/utils'
import Breadcrumb from '../../_components/breadcrumb'

const Books = () => {
  const { data, isFetched } = useQuery(useGetHanYuBooks())
  if (isFetched && !data) {
    notFound()
  }
  return (
    <>
      <Breadcrumb type='hanyu' isEnd={false} />
      <div className='grid grid-cols-2 gap-8 py-6 md:grid-cols-6'>
        {data?.map(item => (
          <Link
            className='relative h-[200px] w-auto p-4 md:h-[280px]'
            href={`/hanyu/${item.name}`}
            key={item.id}
          >
            <Image
              className=' rounded-lg shadow-md'
              src={supabaseUrl(`images/${item.image}`)}
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              alt='ezyChinese hanyu'
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Books
