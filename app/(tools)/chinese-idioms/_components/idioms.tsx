'use client'
import PaginationButton from '@/components/pagination-button'
import { useGetChineseIdioms } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React, { useState } from 'react'
import Idiom from './idiom'

const Idioms = () => {
  const [page, setPage] = useState<number>(0)

  const { data, isFetched, isPlaceholderData } = useQuery(
    useGetChineseIdioms(page)
  )

  if (isFetched && !data) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col items-center justify-evenly ">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10">
        {data?.data?.map((idiom, index) => (
          <div
            key={index}
            className="p-2 md:p-8 flex items-center justify-center "
          >
            <Idiom
              id={idiom.id}
              background_url={idiom.background_url}
              example={idiom.example}
              example_meaning={idiom.example_meaning}
              example_pinyin={idiom.example_pinyin}
              idiom_meaning={idiom.idiom_meaning}
              idiom_pinyin={idiom.idiom_pinyin}
              name={idiom.name}
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

export default Idioms
