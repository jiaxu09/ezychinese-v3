import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Languages } from 'lucide-react'

interface EnglishProps {
  english: string
}
const English = ({ english }: EnglishProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          className=" cursor-pointer"
          aria-label="ezyChinese english"
        >
          <Languages className="w-8 h-8 text-skyblue " />
        </div>
      </DialogTrigger>
      {english && (
        <DialogContent className="bg-skyblue ">
          <div className="flex flex-col items-center justify-center p-2  text-center rounded-lg m-6">
            <p className=" text-gray-600 text-lg">{english}</p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default English
