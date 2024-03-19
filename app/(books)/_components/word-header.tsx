'use client'
import HanziSound from '@/components/hanzi-sound'
import React from 'react'

interface WordHeadProps {
  word: string
}
const WordHeader = ({ word }: WordHeadProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 '>
      <HanziSound word={word} />
      <div className='flex flex-col items-center text-center text-2xl font-semibold md:flex-row md:space-x-2 md:text-6xl'>
        {word.split('(').length > 0 ? (
          <>
            <p>{word.split('(')[0]}</p>
            <p>{word.split('(')[1].replaceAll(')', '')}</p>
          </>
        ) : (
          <p>{word}</p>
        )}
      </div>
    </div>
  )
}

export default WordHeader
