import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import Tabs from '@/app/(books)/_components/tabs'
import React from 'react'

const tabs = [
  {
    name: '生字',
    path: 'literacy'
  },
  {
    name: '词语',
    path: 'word'
  },
  {
    name: '记忆',
    path: 'match'
  },
  {
    name: '视频',
    path: 'video'
  },
  {
    name: '练习',
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
    <div className='container'>
      <Breadcrumb
        isEnd={true}
        type='zhongwen'
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <Tabs
        type='zhongwen'
        tabs={tabs}
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <main className=' mx-auto max-w-3xl'>{children}</main>
    </div>
  )
}

export default PracticesLayout
