'use client'
import { useGetHanYuBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import supabaseUrl from '../../../../lib/utils'
import Link from 'next/link'

const Books = () => {
  const { data, isFetched } = useQuery(useGetHanYuBooks())
  if (isFetched && !data) {
    notFound()
  }
  return (
    <>
      <h1 className="text-xl md:text-4xl text-center py-4 md:py-8">
        选择课本
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
        {data?.map((item) => (
          <Link
            className="w-auto relative p-4 h-[200px] md:h-[280px]"
            href={`/hanyu/${item.name}`}
            key={item.id}
          >
            <Image
              src={supabaseUrl(`images/${item.image}`)}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="ezyChinese hanyu"
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Books
