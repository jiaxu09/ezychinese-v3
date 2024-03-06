'use client'
import Unauthorized from '@/components/unauthorized'
import { useUser } from '@/lib/store/user'
import React from 'react'
import NewOrderWords from './order-words'
import NewSelectRightChoice from './select-right-choice'
import NewSelectWord from './select-word'

interface NewQuizProps {
  bookId: string
  chapterId: string
}
const NewQuiz = ({ bookId, chapterId }: NewQuizProps) => {
  const user = useUser(state => state.user)
  if (!user || user.role !== 'admin') {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }
  return (
    <div className=' grid grid-cols-3 gap-2'>
      <NewOrderWords bookId={bookId} chapterId={chapterId} />
      <NewSelectRightChoice bookId={bookId} chapterId={chapterId} />
      <NewSelectWord bookId={bookId} chapterId={chapterId} />
    </div>
  )
}

export default NewQuiz
