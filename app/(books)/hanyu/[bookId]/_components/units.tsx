'use client'
import NoContent from '@/components/no-content'
import { useGetHanYuUnits } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface UnitsProps {
  bookId: string
}
const Units = ({ bookId }: UnitsProps) => {
  const { data, isFetched } = useQuery(useGetHanYuUnits(bookId))

  if (isFetched && !data) {
    notFound()
  }

  if (data?.length == 0) {
    return <NoContent />
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
      {data?.map((item, index) => (
        <Link
          aria-label="ezyChinese zhongwen"
          key={index}
          className="[&:nth-child(1n)]:bg-crayola [&:nth-child(2n)]:bg-skyblue [&:nth-child(3n)]:bg-wuzzy border rounded-full"
          href={`/hanyu/${bookId}/${item.name}/words`}
        >
          <div className=" cursor-pointer  flex items-center justify-center p-8 text-lg md:text-2xl ">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Units