'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const tabs = [
  {
    name: '生字',
    path: 'literacy',
  },
  {
    name: '词语',
    path: 'word',
  },
  {
    name: '记忆',
    path: 'match',
  },
  {
    name: '视频',
    path: 'video',
  },
]

interface TabsProps {
  bookId: string
  chapterId: string
}
const Tabs = ({ bookId, chapterId }: TabsProps) => {
  const pathname = usePathname()

  return (
    <div className="py-8">
      <div className="flex items-center justify-start gap-6 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            href={`/zhongwen/${bookId}/${chapterId}/${tab.path}`}
          >
            <Button
              className="w-24"
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
