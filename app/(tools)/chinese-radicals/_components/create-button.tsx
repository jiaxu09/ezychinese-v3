'use client'

import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { useUser } from '@/lib/store/user'

import { SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RadicalForm from './radical-form'

const CreateButton = () => {
  const user = useUser((state) => state.user)

  if (!user || user.role !== 'admin') return <></>

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="add" type="button" variant="outline">
          Create New
          <SendHorizonal className="w-5 h-5 ml-1" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className=" text-center pb-4">Add Radical</h2>
        <RadicalForm action="Create" />
      </PopoverContent>
    </Popover>
  )
}

export default CreateButton
