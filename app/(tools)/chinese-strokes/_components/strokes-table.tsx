'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useGetChineseStrokes } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import supabaseUrl from '../../../../lib/utils'

const StrokesTable = () => {
  const { data: strokes, isFetched } = useQuery(useGetChineseStrokes())

  if (isFetched && !strokes) {
    notFound()
  }

  return (
    <div className='mx-auto w-full md:w-4/5 '>
      <Suspense fallback={null}>
        <Table className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>stroke</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead className='text-center'>Name</TableHead>
              <TableHead>Example Characters</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {strokes?.map(stroke => (
              <TableRow key={stroke.id}>
                <TableCell>{stroke.id}</TableCell>
                <TableCell className=' text-sm md:text-lg'>
                  {stroke.stroke}
                </TableCell>
                <TableCell className='relative h-[8px] w-[8px] md:h-[90px] md:w-[87px]'>
                  <Image
                    className=' object-contain'
                    src={supabaseUrl(`/strokes/${stroke.id}.webp`)}
                    fill
                    alt={`ezyChinese Stroke ${stroke.name}`}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                  />
                </TableCell>
                <TableCell className=' flex items-center justify-center space-x-1  text-center'>
                  {stroke.name.split('').map((n, i) => (
                    <ruby key={i}>
                      <span className=' inline-block text-sm md:text-lg'>
                        {n}
                      </span>

                      <rt className=' text-sm md:text-lg'>
                        {stroke.pinyin[i]}
                      </rt>
                    </ruby>
                  ))}
                </TableCell>
                <TableCell className=' text-sm md:text-lg'>
                  {stroke.characters}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Suspense>
    </div>
  )
}

export default StrokesTable
