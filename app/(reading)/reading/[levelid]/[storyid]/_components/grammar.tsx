import React from 'react'

interface GrammarProps {
  grammar?: { zh: string; en: string }[]
}
const Grammar = ({ grammar }: GrammarProps) => {
  return (
    <div className='flex w-full flex-col justify-center space-y-4 '>
      {grammar?.map((item, index) => (
        <div
          className='flex flex-col justify-center odd:bg-foreground p-2 space-y-1'
          key={index}
        >
          <p>{item.zh}</p>
          <p>{item.en}</p>
        </div>
      ))}
    </div>
  )
}

export default Grammar
