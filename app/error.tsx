'use client'

import React from 'react'
import ErrorImg from '/public/images/error.svg'
import Image from 'next/image'
import Misc from '@/components/misc'

const Error = () => {
  return (
    <div className="relative container mx-auto py-20 flex flex-col items-center">
      <div className="flex items-center justify-center font-medium">
        <h1 className=" text-6xl">
          <span className=" text-green">5</span>
          <span className=" text-wuzzy px-4">0</span>
          <span className=" text-skyblue">0</span>
        </h1>
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl py-6">
        Oops! Something went wrong, please try it later.
      </h1>
      <Misc />
    </div>
  )
}

export default Error
