import React from 'react'
import Lessons from './_components/lessons'
import Link from 'next/link'

interface HanYuUnitPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const HanYuLessonPage = ({ params }: HanYuUnitPageProps) => {
  return (
    <main className='container mx-auto'>
      <Lessons bookId={params.bookId} chapterId={params.chapterId} />
    </main>
  )
}

export default HanYuLessonPage
