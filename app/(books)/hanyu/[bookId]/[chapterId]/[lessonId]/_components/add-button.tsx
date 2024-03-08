'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/store/user'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface AddButtonProps {
  bookId: string
  chapterId: string
  lessonId: string
}
const AddButton = ({ bookId, chapterId, lessonId }: AddButtonProps) => {
  const pathname = usePathname()
  const user = useUser(state => state.user)
  return (
    <div className='fixed bottom-20 right-2 md:right-20'>
      {user && user?.role === 'admin' && !pathname.includes('quiz') && (
        <Link href={`/hanyu/${bookId}/${chapterId}/${lessonId}/new`}>
          <Button variant='outline' size='icon'>
            <Plus />
          </Button>
        </Link>
      )}
      {user && user?.role === 'admin' && pathname.includes('quiz') && (
        <Link href={`/hanyu/${bookId}/${chapterId}/${lessonId}/quiz/new`}>
          <Button variant='outline' size='icon'>
            <Plus />
          </Button>
        </Link>
      )}
    </div>
  )
}

export default AddButton
