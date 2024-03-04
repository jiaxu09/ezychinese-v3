import { Book, ChevronRight, ChevronRightIcon, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
  type: 'csol' | 'zhongwen' | 'hanyu'
  bookId: string
  chapterId: string
}
const Breadcrumb = ({ bookId, chapterId, type }: BreadcrumbProps) => {
  return (
    <div className=" flex items-center justify-start">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5 mr-2 " />
              <span className="md:text-lg">Home</span>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <Link
                href={`/${type}/${bookId}`}
                className="inline-flex items-center ml- text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                <Book className="w-4 h-4 md:w-5 md:h-5 mr-2 " />
                <span className="md:text-lg">Book</span>
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="md:text-lg ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Chapter {chapterId}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
