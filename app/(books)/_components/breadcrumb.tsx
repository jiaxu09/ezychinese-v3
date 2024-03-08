import {
  Book,
  BookOpenCheck,
  ChevronRight,
  ChevronRightIcon,
  Home
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
  type: 'csol' | 'zhongwen' | 'hanyu'
  bookId: string
  chapterId: string
  lessonId?: string
}
const Breadcrumb = ({ bookId, chapterId, type, lessonId }: BreadcrumbProps) => {
  return (
    <div className=' flex items-center justify-start'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <Home className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />
              <span className='md:text-lg'>Home</span>
            </Link>
          </li>
          <li>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-gray-500' />
              <Link
                href={`/${type}/${bookId}`}
                className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              >
                <Book className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />
                <span className='md:text-lg'>Book</span>
              </Link>
            </div>
          </li>
          <li aria-current='page'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-gray-500' />
              {lessonId ? (
                <Link
                  className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  href={`/${type}/${bookId}/${chapterId}`}
                >
                  <BookOpenCheck className='mr-2 h-4 w-4 md:h-5 md:w-5 ' />
                  <span className='md:text-lg'>Unit {chapterId}</span>
                </Link>
              ) : (
                <span className='ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2 md:text-lg'>
                  Chapter {chapterId}
                </span>
              )}
            </div>
          </li>
          {lessonId && (
            <li aria-current='page'>
              <div className='flex items-center'>
                <ChevronRight className='h-4 w-4 text-gray-500' />
                <span className='ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2 md:text-lg'>
                  Lesson {lessonId}
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
