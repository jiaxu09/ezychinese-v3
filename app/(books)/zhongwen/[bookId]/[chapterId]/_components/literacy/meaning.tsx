import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BookMarked } from 'lucide-react'

interface MeaningProps {
  meaning: string
}
const Meaning = ({ meaning }: MeaningProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          className=" cursor-pointer"
          aria-label="ezyChinese hanzi meaning"
        >
          <BookMarked className="w-6 h-6 text-wuzzy " />
        </div>
      </DialogTrigger>
      <DialogContent className="container max-h-[50vh] overflow-y-scroll">
        <div className=" bg-pewterblue rounded-lg p-2 m-2">{meaning}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Meaning
