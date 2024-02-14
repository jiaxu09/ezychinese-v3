'use client'

import React from 'react'
import ErrorImg from '/public/images/error.svg'
import Image from 'next/image'

const Error = () => {
  return (
    <div className=" container mx-auto py-20 flex flex-col items-center">
      <div className="w-1/3 mx-auto">
        <Image
          src={ErrorImg}
          width={512}
          height={459}
          alt="ezyChinese error"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl py-6">
        Oops! Something went wrong, please try it later.
      </h1>
    </div>
  )
}

export default Error
