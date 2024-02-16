import React from 'react'
const NotFound = () => {
  return (
    <div className=" container mx-auto py-20 flex flex-col items-center">
      <div className="flex items-center justify-center font-medium">
        <h1 className=" text-6xl">
          <span className=" text-green">4</span>
          <span className=" text-wuzzy px-4">0</span>
          <span className=" text-skyblue">4</span>
        </h1>
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl py-6">
        There&apos;s nothing here...
      </h1>
    </div>
  )
}

export default NotFound
