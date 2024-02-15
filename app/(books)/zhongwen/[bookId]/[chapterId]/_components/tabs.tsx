'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const tabs = ['Literacy', 'Word', 'Match', 'Pinyin', 'Video']

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
            key={tab}
            href={`/zhongwen/${bookId}/${chapterId}/${tab.toLowerCase()}`}
          >
            <Button
              className="w-24"
              variant={
                pathname.includes(tab.toLowerCase()) ? 'default' : 'secondary'
              }
            >
              {tab}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tabs
