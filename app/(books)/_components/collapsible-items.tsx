'use client'
import React from 'react'
import DeleteButton from '../hanyu/[bookId]/[chapterId]/new/_components/delete-button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { ExternalLink } from 'lucide-react'

interface CollapsibleItemsProps {
  items: any[] | undefined
  property: string
  deletePending: boolean
  handleDelete: (id: string, img?: string, audio?: string) => Promise<void>
}
const CollapsibleItems = ({
  items,
  property,
  deletePending,
  handleDelete
}: CollapsibleItemsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex cursor-pointer items-center justify-center py-2'>
          所有题目
          <ExternalLink className='h-4 w-4' />
        </div>
      </PopoverTrigger>
      <PopoverContent className='flex w-80 flex-col space-y-2 bg-foreground'>
        {items?.map((item, index) => (
          <div
            className='flex items-center justify-between rounded-lg px-1 odd:bg-pastelblue even:bg-skyblue'
            key={index}
          >
            {item[`${property}`]}
            <DeleteButton
              deletePending={deletePending}
              handleDeleteHanYu={handleDelete}
              id={item['id']!}
              img={item['image']}
              audio={item['audio']}
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default CollapsibleItems
