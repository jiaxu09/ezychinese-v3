import { Cat } from 'lucide-react'
import React from 'react'
import Misc from './misc'

const NoContent = () => {
  return (
    <div className="relative flex flex-col items-center h-full">
      <div className="flex items-center justify-center font-medium">
        <div>
          <Cat className="w-20 h-20 md:w-40 md:h-40" />
        </div>
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-lg md:text-2xl py-6">
        Whoops..., there&apos;s no content here...
      </h1>
      <Misc />
    </div>
  )
}

export default NoContent
