'use client'
import { Button } from '@/components/ui/button'
import { useGetQiHunEpisodes } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const QiHunEpisodes = () => {
  const { data, isFetched } = useQuery(useGetQiHunEpisodes())

  console.log(data)
  // if (isFetched && !data) {
  //   notFound()
  // }

  return (
    <div className="grid grid-cols-3 md:grid-cols-10 gap-5 md:gap-10">
      {data?.map((item) => (
        <Link href={`/hikaru-no-go/${item.episode}`} key={item.episode}>
          <Button variant="outline">Episode {item.episode}</Button>
        </Link>
      ))}
    </div>
  )
}

export default QiHunEpisodes
