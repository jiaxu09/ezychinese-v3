'use client'
import { useGetSpeech } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { RotateCcw, Volume2 } from 'lucide-react'
import React, { useState } from 'react'
import AudioPlayer from './audio-player'

interface WordHeadProps {
  word: string
}
const WordHeader = ({ word }: WordHeadProps) => {
  const [enabled, setEnabled] = useState(false)
  const { data: base64 } = useQuery(useGetSpeech(word.split('(')[0], enabled))
  const [isSoundLoading, setIsSoundLoading] = useState(false)

  const handleSpeech = async (word: string) => {
    setIsSoundLoading(true)
    setEnabled(true)
    setIsSoundLoading(false)

    if (base64) {
      const audio = new Audio('data:audio/wav;base64,' + base64)
      audio?.play()
    }
  }
  return (
    <div className='flex items-center justify-center space-x-4'>
      {isSoundLoading ? (
        <RotateCcw className=' h-8 w-8 animate-spin text-crayola' />
      ) : (
        <div className=' cursor-pointer' onClick={() => handleSpeech(word)}>
          <Volume2 className='h-8 w-8 text-crayola' />
          <AudioPlayer base64={base64} />
        </div>
      )}

      <span className='row-span-1 text-center text-4xl font-semibold'>
        {word}
      </span>
    </div>
  )
}

export default WordHeader
