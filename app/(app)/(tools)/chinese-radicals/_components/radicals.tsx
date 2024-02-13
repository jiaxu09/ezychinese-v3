'use client'

import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Radical from './radical'
import { supabaseBrowser } from '@/lib/supabase/browser'

const Radicals = () => {
  const supabase = supabaseBrowser()
  const { data, isFetched } = useQuery(useGetChineseRadicals(supabase))
  if (isFetched && !data) {
    throw Error
  }

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-12 gap-6 md:gap-10">
        {data?.map((radical, index) => (
          <div
            key={index}
            className="p-4 md:p-8 flex items-center justify-center "
          >
            <Radical
              name={radical.name}
              characters={radical.characters}
              background_url={radical.background_url}
            />
          </div>
        ))}
      </div>
      <div className="join grid grid-cols-2 py-6 w-2/3 mx-auto">
        <button className="join-item btn btn-primary">Previous </button>
        <button className="join-item btn btn-primary">Next</button>
      </div>
    </div>
  )
}

export default Radicals
