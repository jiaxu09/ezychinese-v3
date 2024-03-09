import { Book, BookOpenCheck, ChevronRight, LibraryBig } from 'lucide-react'
import { Span } from 'next/dist/trace'
import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
  type: 'csol' | 'zhongwen' | 'hanyu'
  bookId?: string
  chapterId?: string
  lessonId?: string
  isEnd: boolean
}
const Breadcrumb = ({
  bookId,
  chapterId,
  type,
  lessonId,
  isEnd
}: BreadcrumbProps) => {
  return (
    <div className=' flex items-center justify-start'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center'>
            <Link
              href={`/${type}`}
              className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <LibraryBig className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />
              <span className='md:text-lg'>Books</span>
            </Link>
          </li>
          {bookId && (
            <li>
              <div className='flex items-center'>
                <ChevronRight className='h-4 w-4 text-gray-500' />
                <Link
                  href={`/${type}/${bookId}`}
                  className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                >
                  <Book className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />

                  <span className='md:text-lg'>
                    Book
                    {isEnd && <span> {bookId}</span>}
                  </span>
                </Link>
              </div>
            </li>
          )}

          {chapterId && (
            <li aria-current='page'>
              <div className='flex items-center'>
                <ChevronRight className='h-4 w-4 text-gray-500' />
                {type === 'hanyu' ? (
                  <Link
                    className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    href={`/${type}/${bookId}/${chapterId}`}
                  >
                    <BookOpenCheck className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />
                    <span className='ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2 md:text-lg'>
                      Unit {isEnd && <span> {chapterId}</span>}
                    </span>
                  </Link>
                ) : (
                  <span className='ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2 md:text-lg'>
                    Chapter {isEnd && <span> {chapterId}</span>}
                  </span>
                )}
              </div>
            </li>
          )}

          {lessonId && (
            <li aria-current='page'>
              <div className='flex items-center'>
                <ChevronRight className='h-4 w-4 text-gray-500' />
                <span className='ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2 md:text-lg'>
                  Lesson {isEnd && <span> {lessonId}</span>}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
