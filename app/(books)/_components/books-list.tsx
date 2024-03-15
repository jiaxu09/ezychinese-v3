import React from 'react'
import { IBook } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

interface BookListProps {
  books: IBook[] | undefined
  type: 'zhongwen' | 'csol'
}
const BooksList = ({ books, type }: BookListProps) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-8 py-6 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {books?.map(book => (
          <Link
            key={book.id}
            className='relative h-[200px] w-auto p-4 sm:h-[240px] md:h-[250px] lg:h-[280px]'
            aria-label='ezyChinese zhongwen'
            href={`/${type}/${book.slug}`}
          >
            <Image
              className=' rounded-lg shadow-md'
              src={book.imgUrl}
              fill
              alt='ezyChinese books'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default BooksList
