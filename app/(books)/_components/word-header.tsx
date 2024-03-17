'use client'
import getVoice from '@/lib/speech'
import { RotateCcw, Volume2 } from 'lucide-react'
import React, { useState } from 'react'

interface WordHeadProps {
  word: string
}
const WordHeader = ({ word }: WordHeadProps) => {
  const [isSoundLoading, setIsSoundLoading] = useState(false)

  const handleSpeech = async (word: string) => {
    setIsSoundLoading(true)
    const base64 = await getVoice(word.split('(')[0])
    if (base64) {
      const audio = new Audio('data:audio/wav;base64,' + base64)
      audio?.play()
    }
    setIsSoundLoading(false)
  }
  return (
    <div className='flex flex-col items-center justify-center space-y-4 '>
      {isSoundLoading ? (
        <RotateCcw className='h-6 w-6 animate-spin text-crayola md:h-8 md:w-8' />
      ) : (
        <div className=' cursor-pointer' onClick={() => handleSpeech(word)}>
          <Volume2 className='h-8 w-8 text-crayola' />
        </div>
      )}

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
