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
      {strokes && (
        <DialogContent className=" ">
          <div className="w-full ">
            <div className="flex flex-col">
              <div className="grid grid-cols-2">
                <div className=" bg-primary">
                  <div className="flex items-center justify-center py-10 space-x-4">
                    <p className=" text-lg">笔画:</p>
                    <p className=" text-gray-600 text-lg">{strokes}</p>
                  </div>
                </div>
                <div className=" bg-crayola">
                  <div className="flex py-10 items-center justify-center rounded-lg space-x-4">
                    <p className=" text-lg">部首:</p>
                    <p className=" text-gray-600 text-lg">{radical}</p>
                  </div>
                </div>
              </div>
              <div className=" bg-skyblue">
                <div className="flex items-center justify-center rounded-lg py-10 space-x-4">
                  <p className=" text-lg">拼音:</p>
                  <p className=" text-gray-800 text-lg">{pinyin?.toString()}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Dictionary
