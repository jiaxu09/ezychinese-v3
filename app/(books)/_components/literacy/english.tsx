import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Languages } from 'lucide-react'

interface EnglishProps {
  english: { explain: string; entry: string }[]
}
const English = ({ english }: EnglishProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role='button'
          className=' cursor-pointer'
          aria-label='ezyChinese english'
        >
          <Languages className='h-8 w-8 text-skyblue ' />
        </div>
      </DialogTrigger>
      {english && (
        <DialogContent className='bg-skyblue '>
          <div className='m-6 flex flex-col items-center justify-center space-y-2 rounded-lg p-2 text-center'>
            {english.map((item, index) => (
              <div className='flex w-full items-center justify-start gap-4' key={index}>
                <span className=' w-1/5 text-right'>{item.entry}</span>
                <span className=' grow text-left'>{item.explain}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default English
