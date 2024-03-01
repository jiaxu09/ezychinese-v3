'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/store/user'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface AddButtonProps {
  bookId: string
  chapterId: string
}
const AddButton = ({ bookId, chapterId }: AddButtonProps) => {
  const user = useUser(state => state.user)
  return (
    <div className='flex w-full items-center justify-end'>
      <Link href={`/hanyu/${bookId}/${chapterId}/new`}>
        <Button variant='outline' size='icon'>
          <Plus />
        </Button>
      </Link>
    </div>
  )
}

export default AddButton
