'use client'

import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Radical from './radical'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Radicals = () => {
  const supabase = supabaseBrowser()
  const { data, isFetched } = useQuery(useGetChineseRadicals(supabase))
  if (isFetched && !data) {
    throw Error
  }

  return (
    <div className="w-full flex flex-col items-center justify-evenly ">
      <div className="grid grid-cols-5 md:grid-cols-12 gap-6 md:gap-10">
        {data?.map((radical, index) => (
          <div
            key={index}
            className="p-4 md:p-8 flex items-center justify-center "
          >
            <Radical
              id={radical.id}
              name={radical.name}
              characters={radical.characters}
              background_url={radical.background_url}
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-32 ">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="default">
            <ChevronLeft className="w-5 h-5" /> Prev
          </Button>
          <Button variant="default">
            Next <ChevronRight className="w-5 h-5" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Radicals
