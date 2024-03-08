import Misc from '@/components/misc'
import React from 'react'
const NotFound = () => {
  return (
    <div className='relative flex h-full flex-col items-center py-32'>
      <div className='flex items-center justify-center font-medium'>
        <h1 className=' text-7xl'>
          <span className=' text-green'>4</span>
          <span className=' text-wuzzy px-4'>0</span>
          <span className=' text-skyblue'>4</span>
        </h1>
      </div>
      <h1 className=' w-2/3 py-6 text-center text-2xl tracking-wide'>
        Whoops..., Looks like we lost that page...
      </h1>
      <Misc />
    </div>
  )
}

export default NotFound
