import React from 'react'
import NewMultipleChoice from './_components/new-multiple-choice'
import NewMultipleChoiceListening from './_components/new-multiple-choice-listening'
import NewSelectRightPinyin from './_components/new-select-right-pinyin'

interface NewQuizPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const NewQuizPage = ({ params }: NewQuizPageProps) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <NewMultipleChoice bookId={params.bookId} chapterId={params.chapterId} />
      <NewMultipleChoiceListening
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <NewSelectRightPinyin
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
    </div>
  )
}

export default NewQuizPage
