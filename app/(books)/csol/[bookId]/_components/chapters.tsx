'use client'
import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import { useGetChaptersByBookId } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface ChaptersProps {
  slug: string
}
const Chapters = ({ slug }: ChaptersProps) => {
  const { data, isFetched } = useQuery(useGetChaptersByBookId(slug))
  if (isFetched && !data) {
    notFound()
  }
  return (
    <>
      <Breadcrumb type='csol' bookId={slug} isEnd={false} />
      <div className='grid grid-cols-3 gap-8 py-6 md:grid-cols-4 md:gap-10'>
        {data?.map((item, index) => (
          <Link
            aria-label='ezyChinese zhongwen'
            key={index}
            className='rounded-full shadow-md [&:nth-child(1n)]:bg-crayola [&:nth-child(2n)]:bg-skyblue [&:nth-child(3n)]:bg-green'
            href={`/csol/${slug}/${item.name}/words`}
          >
            <div className=' flex  cursor-pointer items-center justify-center p-8 '>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Chapters
