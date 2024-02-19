'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface TabsProps {
  type: 'csol' | 'zhongwen'
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
    <div className="py-8">
      <div className="flex items-center justify-start gap-3 md:gap-6 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            href={`/${type}/${bookId}/${chapterId}/${tab.path}`}
          >
            <Button
              className=" w-16 md:w-24"
              variant={pathname.includes(tab.path) ? 'default' : 'secondary'}
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
