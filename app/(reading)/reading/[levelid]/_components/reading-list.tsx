import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import supabaseUrl from '../../../../../lib/utils'

const reading = [
  {
    name: 'pangu',
    level: 'hsk-1',
    image: 'readings/pangu.webp'
  }
]
const ReadingList = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5'>
      {reading.map((item, index) => (
        <Link
          href={`/reading/${item.level}/${item.name}`}
          className='block'
          key={index}
        >
          <div className='relative'>
            <Image
              alt={`ezyChinese reading ${item.name}`}
              src={supabaseUrl(`${item.image}`)}
              className='object-container rounded-bl-3xl rounded-tr-3xl'
              width={256}
              height={256}
              priority
            />
          </div>

          <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
            <strong className='font-medium'>盘古开天辟地</strong>

            <span className='hidden sm:block sm:h-px sm:w-8 sm:bg-crayola'></span>

            <p className='mt-0.5 text-gray-500 sm:mt-0'>
              Pangu Separates the Sky from the Earth
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ReadingList
