'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const tabs = [
  { name: 'Initials(声母)', path: 'initials' },
  { name: 'Finals(韵母)', path: 'finals' },
  { name: 'Whole Syllables(整体音节)', path: 'whole-syllables' },
]
const Tabs = () => {
  const pathname = usePathname()
  return (
    <div className="container py-8 flex flex-wrap gap-4">
      {tabs.map((tab, index) => (
        <Link href={`/pinyin/${tab.path}`} key={index}>
          <Button aria-label='ezyChinese pinyin tabs' variant={pathname.includes(tab.path) ? 'default' : 'outline'}>
            {tab.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}

export default Tabs
