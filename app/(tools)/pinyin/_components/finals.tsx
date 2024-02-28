'use client'

import { useGetChinesePinyinByCategory } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React from 'react'
import FinalsWholeSyllables from './finals-whole-syllables'

const Finals = () => {
  const { data, isFetched } = useQuery(useGetChinesePinyinByCategory('finals'))

  if (isFetched && !data) {
    notFound()
  }

  return <FinalsWholeSyllables pinyins={data} />
}

export default Finals
