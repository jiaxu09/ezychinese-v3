import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Notebook } from 'lucide-react'
import React from 'react'

interface SentencesProps {
  sentences: {
    cn: string
    en: string
  }[]
}
const Sentences = ({ sentences }: SentencesProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role='button'
          className=' cursor-pointer'
          aria-label='ezyChinese hanzi meaning'
        >
          <Notebook className='h-8 w-8 text-green ' />
        </div>
      </DialogTrigger>
      {sentences && (
        <DialogContent className=' max-h-[50vh] overflow-y-scroll'>
          <div className=' rounded-lg p-8'>
            {sentences.map((item, index) => (
              <div
                key={index}
                className='my-3 flex flex-col rounded-lg p-2 odd:bg-green even:bg-skyblue'
              >
                <div className=''>{item?.cn}:</div>
                <div className=' italic '>{item.en}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Sentences
