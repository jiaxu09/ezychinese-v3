import Misc from '@/components/misc'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center h-full py-32">
      <div className="flex items-center justify-center font-medium">
        <h1 className=" text-7xl">
          <span className=" text-green">5</span>
          <span className=" text-wuzzy px-4">0</span>
          <span className=" text-skyblue">0</span>
        </h1>
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl py-6">
        Whoops..., something went wrong..., please try it later.
      </h1>
      <Misc />
    </div>
  )
}

export default NotFoundPage
