'use client'
import getVoice from '@/lib/speech'
import { RotateCcw, Volume2 } from 'lucide-react'
import React, { useState } from 'react'

interface HanziSoundProps {
  word: string
}
const HanziSound = ({ word }: HanziSoundProps) => {
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
    <div>
      {isSoundLoading ? (
        <RotateCcw className='h-8 w-8 animate-spin text-crayola md:h-8 md:w-8' />
      ) : (
        <div
          className=' cursor-pointer'
          onClick={e => {
            e.stopPropagation()
            handleSpeech(word)
          }}
        >
          <Volume2 className='h-8 w-8 text-crayola' />
        </div>
      )}
    </div>
  )
}

export default HanziSound
