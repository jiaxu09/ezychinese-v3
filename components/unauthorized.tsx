import { Siren } from 'lucide-react'
import React from 'react'

const Unauthorized = () => {
  return (
    <div className=' flex flex-col items-center justify-center space-y-8 py-10 text-center'>
      <div className='flex w-full items-center justify-center space-x-4'>
        <Siren className='h-8 w-8 text-destructive' />
        <h1 className=' text-4xl'>Hold Up!</h1>
      </div>
      <p className=' text-lg md:text-3xl'>401 Unauthorized</p>
    </div>
  )
}

export default Unauthorized
