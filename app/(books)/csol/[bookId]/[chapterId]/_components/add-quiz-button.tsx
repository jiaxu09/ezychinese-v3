'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/store/user'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface AddQuizButtonProps {
  bookId: string
  chapterId: string
}
const AddQuizButton = ({ bookId, chapterId }: AddQuizButtonProps) => {
  const user = useUser(state => state.user)
  const pathname = usePathname()

  if (!user) {
    return <></>
  }

  if (user.role !== 'admin') {
    return <></>
  }

  if (!pathname.includes('quiz')) {
    return <></>
  }
  return (
    <Link
      href={`/csol/${bookId}/${chapterId}/new-quiz`}
      className=' absolute bottom-5 right-20 hidden md:block'
    >
      <Button variant='outline' size='icon'>
        <Plus />
      </Button>
    </Link>
  )
}

export default AddQuizButton
