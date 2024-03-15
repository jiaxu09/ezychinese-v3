'use client'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BookMarked, Volume2 } from 'lucide-react'

interface MeaningProps {
  meaning: {
    mp3?: string
    pinyin: string
    explanation: {
      partsOfSpeech: string
      en_mean: string[]
    }[]
  }[]
}
const Meaning = ({ meaning }: MeaningProps) => {
  const handleSound = (url?: string) => {
    if (url) {
      const audio = new Audio(url)
      audio?.play()
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role='button'
          className=' cursor-pointer'
          aria-label='ezyChinese hanzi meaning'
        >
          <BookMarked className='h-8 w-8 text-green ' />
        </div>
      </DialogTrigger>
      {meaning && (
        <DialogContent className=' max-h-[50vh] overflow-y-scroll'>
          <div className=' rounded-lg p-8'>
            {meaning.map((item, index) => (
              <div
                key={index}
                className='flex flex-col border-b border-gray-300 py-4'
              >
                <div className='flex items-center'>
                  {item.mp3 && (
                    <div
                      className=' cursor-pointer'
                      onClick={() => handleSound(item.mp3)}
                    >
                      <Volume2 className='h-6 w-6 text-crayola' />
                    </div>
                  )}

                  <div className='px-3'>{item.pinyin}:</div>
                </div>
                <div className=' flex flex-col space-y-2'>
                  {item.explanation.map((ex, j) => (
                    <div key={j} className='flex space-x-2 '>
                      <p className=' italic'>{ex.partsOfSpeech}:</p>
                      <p>{ex.en_mean}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Meaning
