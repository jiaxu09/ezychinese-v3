import React from 'react'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'
const WellDone = () => {
  return (
    <div className='mx-auto w-1/3 animate-ping py-20 animate-duration-1000 animate-once animate-ease-in-out'>
      <Image
        src={supabaseUrl('images/well-done.webp')}
        width={690}
        height={695}
        priority
        sizes='33vw'
        alt='ezyChinese well done'
      />
    </div>
  )
}

export default WellDone
