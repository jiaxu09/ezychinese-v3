import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import React from 'react'
import AddButton from './_components/add-button'
import Tabs from './_components/tabs'

const tabs = [
  {
    name: '生词/Words',
    path: 'words'
  },
  {
    name: '句子/Sentences',
    path: 'sentences'
  },
  {
    name: '课本/Text',
    path: 'text'
  },
  {
    name: '汉字/Writing',
    path: 'writing'
  },
  {
    name: '练习/Quiz',
    path: 'quiz'
  }
]
const PracticesLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { bookId: string; chapterId: string; lessonId: string }
}>) => {
  return (
    <div className='container py-4'>
      <Breadcrumb
        type='hanyu'
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <Tabs
        type='hanyu'
        tabs={tabs}
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
      <div className=''>{children}</div>
      <AddButton
        bookId={params.bookId}
        chapterId={params.chapterId}
        lessonId={params.lessonId}
      />
    </div>
  )
}

export default PracticesLayout
