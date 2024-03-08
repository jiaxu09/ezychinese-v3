import React from 'react'
import Image from 'next/image'
const WellDone = () => {
  return (
    <div className='mx-auto w-1/3 animate-wiggle py-20 animate-duration-1000 animate-ease-in-out'>
      <Image
        src='/images/well-done.svg'
        width={203}
        height={203}
        priority
        sizes='33vw'
        alt='ezyChinese well done'
      />
    </div>
  )
}

export default WellDone
