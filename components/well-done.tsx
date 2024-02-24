import React from 'react'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'
const WellDone = () => {
  return (
    <div className="animate-ping animate-infinite animate-duration-1000 animate-ease-in-out w-1/3 mx-auto">
      <Image
        src={supabaseUrl('images/well-done.webp')}
        width={690}
        height={695}
        priority
        sizes="33vw"
        alt="ezyChinese well done"
      />
    </div>
  )
}

export default WellDone
