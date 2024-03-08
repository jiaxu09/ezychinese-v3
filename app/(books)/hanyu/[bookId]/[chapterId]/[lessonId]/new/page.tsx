import React from 'react'
import NewPractices from './_components/new-practices'

interface NewPracticesPageProps {
  params: {
    bookId: string
    chapterId: string
    lessonId: string
  }
}
const NewPracticesPage = ({ params }: NewPracticesPageProps) => {
  return (
    <div className='container w-full'>
      <NewPractices
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
    </div>
  )
}

export default NewPracticesPage
