'use client'
import { useGetChineseBooks } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const Books = () => {
  const { data, isFetched } = useQuery(useGetChineseBooks())
  if (isFetched && !data) {
    notFound()
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {data?.map((book) => (
        <div key={book.id}>
          <Link
            aria-label="ezyChinese zhongwen"
            href={`/zhongwen/${book.slug}`}
          >
            <div className=" w-full ">
              <Image
                src={book.imgUrl}
                width={200}
                height={278}
                alt="ezyChinese books"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Books
