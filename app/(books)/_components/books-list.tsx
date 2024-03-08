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
      <div className='grid grid-cols-2 gap-8 py-6 md:grid-cols-5'>
        {books?.map(book => (
          <div key={book.id}>
            <Link
              aria-label='ezyChinese zhongwen'
              href={`/${type}/${book.slug}`}
            >
              <div className=' w-full '>
                <Image
                  className=' rounded-lg shadow-md'
                  src={book.imgUrl}
                  width={200}
                  height={278}
                  alt='ezyChinese books'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default BooksList
