'use client'
import Unauthorized from '@/components/unauthorized'
import { useUser } from '@/lib/store/user'
import React from 'react'
import NewWords from './new-words'
import NewSentences from './new-sentences'
import NewTexts from './new-texts'
import NewWritings from './new-writings'

interface NewPracticesProps {
  bookId: string
  chapterId: string
  lessonId: string
}
const NewPractices = ({ bookId, chapterId, lessonId }: NewPracticesProps) => {
  const user = useUser(state => state.user)

  if (user?.role !== 'admin') {
    return <Unauthorized />
  }
  return (
    <div className='grid grid-cols-3 gap-2 '>
      <NewWords bookId={bookId} chapterId={chapterId} lessonId={lessonId} />
      <NewSentences bookId={bookId} chapterId={chapterId} lessonId={lessonId} />
      <NewTexts bookId={bookId} chapterId={chapterId} lessonId={lessonId} />
      <NewWritings bookId={bookId} chapterId={chapterId} lessonId={lessonId} />
    </div>
  )
}

export default NewPractices
