'use client'
import { Button } from '@/components/ui/button'
import { useGetChinesePinyinByCategory } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React from 'react'

const Initials = () => {
  const { data, isFetched } = useQuery(
    useGetChinesePinyinByCategory('initials')
  )

  if (isFetched && !data) {
    notFound()
  }

  const hanlePinyinSound = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }

  return (
    <div className="container grid grid-cols-4 md:grid-cols-8 gap-10 py-10">
      {data?.map((item) => (
        <div className=" relative" key={item.id}>
          <Button
            aria-label="ezyChinese pinyin sound"
            onClick={() => hanlePinyinSound(item.tones[0].url)}
            variant="outline"
            size="icon"
          >
            {item.name}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Initials
