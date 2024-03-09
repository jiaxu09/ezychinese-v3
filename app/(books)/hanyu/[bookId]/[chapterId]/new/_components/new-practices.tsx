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
}
const NewPractices = ({ bookId, chapterId }: NewPracticesProps) => {
  const user = useUser(state => state.user)

  if (user?.role !== 'admin') {
    return <Unauthorized />
  }
  return (
    <div className='grid grid-cols-3 gap-2 '>
      <NewWords bookId={bookId} chapterId={chapterId} />
      <NewSentences bookId={bookId} chapterId={chapterId} />
      <NewTexts bookId={bookId} chapterId={chapterId} />
      <NewWritings bookId={bookId} chapterId={chapterId} />
    </div>
  )
}

export default NewPractices
