import React from 'react'

const BlurBg = () => {
  return (
    <div className=" relative w-full h-full ">
      <div className="absolute top-20 left-12 w-72 h-72 bg-crayola rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-[50%] right-[30%] w-36 h-72 bg-crayola rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob rotate-45"></div>
      <div className="absolute top-12 right-24 w-72 h-72 bg-pewterblue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  )
}

export default BlurBg
