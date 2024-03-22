import supabaseUrl from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reading = () => {
  return (
    <div className='grid w-full grid-cols-1 bg-foreground pt-10 md:grid-cols-2 md:py-20'>
      <div className='w-full '>
        <div className='container flex h-48 w-full flex-col space-y-4 rounded-br-[10rem] rounded-tr-[10rem] bg-pewterblue py-5 md:h-64 md:items-center'>
          <h1 className=' text-left text-3xl font-medium md:text-4xl'>
            Leveled Reading
          </h1>
          <p className='w-3/4 text-sm md:text-lg md:leading-8 md:tracking-wider'>
            HSK-leveled reading plays a crucial role in language acquisition and
            proficiency. By aligning with the HSK levels, learners gain a
            structured path for their journey into Mandarin Chinese
          </p>
        </div>
      </div>
      <div className='h-full w-full p-4 md:p-0'>
        <div className='flex h-full w-full flex-col gap-4'>
          <div className='grid h-full w-full -translate-y-8 grid-cols-3 gap-10 md:-translate-x-10 md:translate-y-0'>
            <Link href='/reading/hsk-1' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-green p-1'>
                <div className='relative h-10 w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_1.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 1</p>
            </Link>
            <Link href='/reading/hsk-2' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-crayola p-1'>
                <div className='relative h-10 w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_2.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 2</p>
            </Link>
            <Link href='/reading/hsk-3' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-skyblue p-1'>
                <div className='relative h-10 w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_3.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 3</p>
            </Link>
          </div>
          <div className='grid h-full w-full -translate-y-8 grid-cols-3  gap-10 md:-translate-x-28 md:translate-y-0'>
            <Link href='/reading/hsk-4' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-pastelblue p-1'>
                <div className='relative h-10 w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_4.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 4</p>
            </Link>
            <Link href='/reading/hsk-5' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-[#D08770] p-1'>
                <div className='relative h-[42px] w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_5.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 5</p>
            </Link>
            <Link href='/reading/hsk-6' className='reading-link'>
              <div className='flex h-14 w-10 items-center justify-center rounded-full bg-pewterblue p-1'>
                <div className='relative h-10 w-8'>
                  <Image
                    src={supabaseUrl('readings/ma_6.webp')}
                    alt='ma'
                    fill
                    priority
                    sizes='33vw'
                  />
                </div>
              </div>
              <p className=' text-xl font-medium'>HSK </p>
              <p className=' text-lg'>Level 6</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reading
