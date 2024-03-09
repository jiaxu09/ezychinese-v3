'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface TabsProps {
  type: 'csol' | 'zhongwen' | 'hanyu'
  bookId: string
  chapterId: string
  tabs: {
    name: string
    path: string
  }[]
}

const Tabs = ({ bookId, chapterId, tabs, type }: TabsProps) => {
  const pathname = usePathname()
  return (
    <div className='py-8'>
      <div className='flex flex-wrap items-center justify-start gap-3 md:gap-6'>
        {tabs.map(tab => (
          <Link
            key={tab.path}
            href={`/${type}/${bookId}/${chapterId}/${tab.path}`}
          >
            <Button
              className=' md:w-32'
              variant={pathname.includes(tab.path) ? 'default' : 'outline'}
            >
              {tab.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tabs
