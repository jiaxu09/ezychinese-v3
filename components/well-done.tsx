'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

const WellDone = () => {
  const router = useRouter()
  return (
    <div className='container m-auto  '>
      <div className='firework'></div>
      <div className='firework'></div>
      <div className='firework'></div>
      <div className='firework'></div>
      <div className='firework'></div>

      <h2 className='flex animate-ping items-center justify-center text-nowrap p-20 text-lg text-green animate-duration-1000 animate-infinite animate-ease-in-out md:text-2xl'>
        Well Done
      </h2>
      <div className='z-50 flex w-full items-center justify-center pt-36'>
        <Button className='w-2/3' onClick={() => router.back()} variant='outline'>
          Back
        </Button>
      </div>
    </div>
  )
}

export default WellDone
