import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { SendHorizonal } from 'lucide-react'
import React from 'react'
import IdiomForm from './idiom-form'

const CreateButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="add" type="button" variant="outline">
          Create New
          <SendHorizonal className="w-5 h-5 ml-1" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className=" text-center pb-4">Add Idiom</h2>
        <IdiomForm action="Create" />
      </PopoverContent>
    </Popover>
  )
}

export default CreateButton
