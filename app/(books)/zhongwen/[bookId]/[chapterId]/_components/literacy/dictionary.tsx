import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Scroll } from 'lucide-react'

interface DictionaryProps {
  strokes: string
  pinyin: string
  radical: string
}
const Dictionary = ({ strokes, pinyin, radical }: DictionaryProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          className=" cursor-pointer"
          aria-label="ezyChinese dictionary"
        >
          <Scroll className="w-6 h-6 text-orange " />
        </div>
      </DialogTrigger>
      <DialogContent className="container ">
        <div className=" grid grid-cols-3 gap-8 m-6">
          <div className="flex flex-col items-center justify-center p-2 bg-primary rounded-lg">
            <h2 className=" text-lg">笔画</h2>{' '}
            <h3 className=" text-gray-600 text-lg">{strokes}</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-wuzzy rounded-lg">
            <h2 className=" text-lg">拼音</h2>{' '}
            <h3 className=" text-gray-800 text-lg">{pinyin?.toString()}</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-green rounded-lg">
            <h2 className=" text-lg">部首</h2>{' '}
            <h3 className=" text-gray-600 text-lg">{radical}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Dictionary
