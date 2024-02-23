'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/store/user'
import Link from 'next/link'
import React from 'react'

interface AddButtonProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const AddButton = ({ params }: AddButtonProps) => {
  const user = useUser((state) => state.user)
  if (!user || user.role !== 'admin') {
    return
  }
  return (
    <Link href={`/zhongwen/${params.bookId}/${params.chapterId}/quiz/new-quiz`}>
      <Button aria-label="ezyChinese add new quiz" variant="default">
        Add Quiz
      </Button>
    </Link>
  )
}

export default AddButton
