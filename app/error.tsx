'use client'

import React from 'react'
import CoffeeDoddle from '/public/images/CoffeeDoddle.svg'
import Image from 'next/image'

const Error = () => {
  return (
    <div className=" container mx-auto py-20 flex flex-col items-center">
      <div className="w-1/2 mx-auto">
        <Image
          src={CoffeeDoddle}
          width={1024}
          height={768}
          alt="ezyChinese error"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl">
        Oops! Something went wrong, please try it later.
      </h1>
    </div>
  )
}

export default Error
