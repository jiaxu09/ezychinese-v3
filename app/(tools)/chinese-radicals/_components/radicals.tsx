'use client'
import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Radical from './radical'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const Radicals = () => {
  const supabase = supabaseBrowser()
  const [page, setPage] = useState<number>(0)

  const { data, isFetched, isPlaceholderData } = useQuery(
    useGetChineseRadicals(supabase, page)
  )

  if (isFetched && !data) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col items-center justify-evenly ">
      <div className="grid grid-cols-5 md:grid-cols-12 gap-6 md:gap-10">
        {data?.data?.map((radical, index) => (
          <div
            key={index}
            className="p-4 md:p-8 flex items-center justify-center "
          >
            <Radical
              id={radical.id}
              name={radical.name}
              radical_meaning={radical.radical_meaning}
              radical_pinyin={radical.radical_pinyin}
              characters={radical.characters}
              characters_meanings={radical.characters_meanings}
              characters_pinyins={radical.characters_pinyins}
              background_url={radical.background_url}
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-32 ">
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 0}
            variant="default"
          >
            <ChevronLeft className="w-5 h-5" /> Prev
          </Button>
          <Button
            disabled={isPlaceholderData || !data?.hasMore}
            onClick={() => {
              if (!isPlaceholderData && data?.hasMore) {
                setPage((old) => old + 1)
              }
            }}
            variant="default"
          >
            Next <ChevronRight className="w-5 h-5" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Radicals
