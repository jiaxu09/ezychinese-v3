'use client'
import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import Link from 'next/link'
import React from 'react'

interface LessonsProps {
  bookId: string
}
const Lessons = ({ bookId }: LessonsProps) => {
  return (
    <>
      <Breadcrumb type='hanyu' bookId={bookId} isEnd={false} />
      <div className='grid grid-cols-3 gap-8 py-6 md:grid-cols-5 md:gap-10'>
        {Array.from({ length: 15 }, (_, i) => i + 1)?.map((item, index) => (
          <Link
            aria-label='ezyChinese zhongwen'
            key={index}
            className=' rounded-full shadow-md [&:nth-child(1n)]:bg-crayola [&:nth-child(2n)]:bg-skyblue [&:nth-child(3n)]:bg-green'
            href={`/hanyu/${bookId}/${item}/words`}
          >
            <div className=' flex  cursor-pointer items-center justify-center p-8 text-lg md:text-2xl '>
              {item}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Lessons
