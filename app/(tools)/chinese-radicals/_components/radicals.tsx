'use client'
import { useGetChineseRadicals } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Radical from './radical'
import { notFound } from 'next/navigation'
import PaginationButton from '@/components/pagination-button'

const Radicals = () => {
  const [page, setPage] = useState<number>(0)

  const { data, isFetched, isPlaceholderData } = useQuery(
    useGetChineseRadicals(page)
  )

  if (isFetched && !data) {
    notFound()
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="grid grid-cols-5 md:grid-cols-12 gap-6 md:gap-10 ">
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
              radical_explain={radical.radical_explain}
              radical_explain_pinyin={radical.radical_explain_pinyin}
              characters={radical.characters}
              characters_meanings={radical.characters_meanings}
              characters_pinyins={radical.characters_pinyins}
              background_url={radical.background_url}
            />
          </div>
        ))}
      </div>
      <PaginationButton
        page={page}
        setPage={setPage}
        isPlaceholderData={isPlaceholderData}
        hasMore={data?.hasMore}
      />
    </div>
  )
}

export default Radicals
