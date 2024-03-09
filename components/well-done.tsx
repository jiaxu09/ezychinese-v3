import { Cat } from 'lucide-react'
import React from 'react'
import Misc2 from './misc-2'

const WellDone = () => {
  return (
    <div className='relative mx-auto w-full py-20 '>
      <div className='flex items-center justify-center font-medium'>
        <div>
          <Cat className='h-20 w-20 md:h-40 md:w-40' />
        </div>
      </div>
      <h1 className=' animate-pulse py-6 text-center text-lg tracking-wide text-success animate-duration-1000 md:text-3xl'>
        Good Job
      </h1>
      <Misc2 />
    </div>
  )
}

export default WellDone
