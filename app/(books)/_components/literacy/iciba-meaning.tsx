import { Volume2 } from 'lucide-react'
import React from 'react'

interface IcibaMeaningProps {
  meaning: {
    mp3?: string
    pinyin: string
    explanation: {
      partsOfSpeech: string
      en_mean: string[]
    }[]
  }[]
  handleSound: (url?: string) => void
}
const IcibaMeaning = ({ meaning, handleSound }: IcibaMeaningProps) => {
  return (
    <div>
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
                <p className=' italic'>{ex.partsOfSpeech}</p>
                <p>{ex.en_mean}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default IcibaMeaning
