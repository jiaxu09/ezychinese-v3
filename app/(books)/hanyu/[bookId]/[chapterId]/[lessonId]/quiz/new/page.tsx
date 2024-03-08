import React from 'react'
import NewMultipleChoice from './_components/new-multiple-choice'
import NewMultipleChoiceListening from './_components/new-multiple-choice-listening'
import NewSelectRightPinyin from './_components/new-select-right-pinyin'

interface NewQuizPageProps {
  params: {
    bookId: string
    chapterId: string
    lessonId: string
  }
}

const NewQuizPage = ({ params }: NewQuizPageProps) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <NewMultipleChoice
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
      <NewMultipleChoiceListening
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
      <NewSelectRightPinyin
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
    </div>
  )
}

export default NewQuizPage
