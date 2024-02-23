import React, { Suspense } from 'react'
import Quiz from './_components/quiz'
import AddButton from './add-button'

interface QuizProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizPage = ({ params }: QuizProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Suspense fallback={null}>
        <Quiz />
      </Suspense>
      <div className="w-full flex justify-end space-x-4">
        <AddButton params={params} />
      </div>
    </div>
  )
}

export default QuizPage
