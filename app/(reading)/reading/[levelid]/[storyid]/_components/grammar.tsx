import React from 'react'

interface GrammarProps {
  grammar?: { zh: string; en: string }[]
}
const Grammar = ({ grammar }: GrammarProps) => {
  return (
    <div className='flex w-full flex-col justify-center space-y-4 '>
      {grammar?.map((item, index) => (
        <div
          className='flex flex-col justify-center space-y-1 p-2 odd:bg-foreground'
          key={index}
        >
          <div className='flex items-center space-x-2'>
            <p>{item.zh}</p>
          </div>
          <p>{item.en}</p>
        </div>
      ))}
    </div>
  )
}

export default Grammar
