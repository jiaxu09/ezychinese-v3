'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface LessonsProps {
  bookId: string
  chapterId: string
}
const Lessons = ({ bookId, chapterId }: LessonsProps) => {
  const [lessons, setLessons] = useState<number[]>([])

  useEffect(() => {
    if (chapterId === '1') {
      setLessons([1, 2, 3, 4, 5])
    }
    if (chapterId === '2') {
      setLessons([6, 7, 8, 9, 10])
    }
    if (chapterId === '3') {
      setLessons([11, 12, 13, 14, 15])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='grid grid-cols-3 gap-8 md:grid-cols-4 md:gap-10'>
      {lessons?.map((item, index) => (
        <Link
          aria-label='ezyChinese zhongwen'
          key={index}
          className='[&:nth-child(3n)]:bg-wuzzy rounded-full border [&:nth-child(1n)]:bg-crayola [&:nth-child(2n)]:bg-skyblue'
          href={`/hanyu/${bookId}/${chapterId}/${item}/words`}
        >
          <div className=' flex  cursor-pointer items-center justify-center p-8 text-lg md:text-2xl '>
            {item}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Lessons
