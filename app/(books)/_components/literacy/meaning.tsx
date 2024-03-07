import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BookMarked } from 'lucide-react'

interface MeaningProps {
  meaning: {
    pinyin: string
    explanations: { content: string }[]
  }[]
}
const Meaning = ({ meaning }: MeaningProps) => {
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
          <div className=' rounded-lg bg-pewterblue p-8'>
            {meaning.map((item, index) => (
              <div key={index} className='flex '>
                <div className='px-3'>{item.pinyin}:</div>
                <div className=' flex grow flex-col space-y-2'>
                  {item.explanations.map((ex, j) => (
                    <span key={j}>{ex.content}</span>
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
