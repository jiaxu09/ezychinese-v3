import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import Tabs from '@/app/(books)/_components/tabs'
import React from 'react'
import AddQuizButton from './_components/add-quiz-button'

const tabs = [
  {
    name: 'Words',
    path: 'words'
  },
  {
    name: 'Singing',
    path: 'singing'
  },
  {
    name: 'Writing',
    path: 'writing'
  },
  {
    name: 'Quiz',
    path: 'quiz'
  }
]

const PracticesLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { bookId: string; chapterId: string }
}>) => {
  return (
    <main className='container py-4'>
      <Breadcrumb
        type='csol'
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <Tabs
        type='csol'
        tabs={tabs}
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <div className=''>{children}</div>
      <AddQuizButton bookId={params.bookId} chapterId={params.chapterId} />
    </main>
  )
}

export default PracticesLayout
