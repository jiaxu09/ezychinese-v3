import React from 'react'
import Lessons from './_components/lessons'

interface HanYuUnitPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const HanYuLessonPage = ({ params }: HanYuUnitPageProps) => {
  return (
    <main>
      <div className=' container mx-auto'>
        <h1 className='py-4 text-center text-xl md:py-8 md:text-4xl'>
          选择课
        </h1>
        <Lessons bookId={params.bookId} chapterId={params.chapterId} />
      </div>
    </main>
  )
}

export default HanYuLessonPage
