'use client'
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
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
      {data?.map((item, index) => (
        <Link
          aria-label="ezyChinese zhongwen"
          key={index}
          className="[&:nth-child(1n)]:bg-crayola [&:nth-child(2n)]:bg-skyblue [&:nth-child(3n)]:bg-wuzzy border rounded-full"
          href={`/zhongwen/${slug}/${item.name}/literacy`}
        >
          <div className=" cursor-pointer  flex items-center justify-center p-8 text-lg md:text-2xl ">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Chapters
