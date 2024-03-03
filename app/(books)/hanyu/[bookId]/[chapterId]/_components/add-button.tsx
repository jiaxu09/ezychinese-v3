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
    <div className='fixed bottom-20 right-2 md:right-20'>
      {user && user?.role === 'admin' && (
        <Link href={`/hanyu/${bookId}/${chapterId}/new`}>
          <Button variant='outline' size='icon'>
            <Plus />
          </Button>
        </Link>
      )}
    </div>
  )
}

export default AddButton
