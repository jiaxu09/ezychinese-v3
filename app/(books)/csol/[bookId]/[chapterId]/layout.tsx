import Breadcrumb from '@/app/(books)/_components/breadcrumb'
import Tabs from '@/app/(books)/_components/tabs'
import React from 'react'

const tabs = [
  {
    name: 'Words',
    path: 'words',
  },
  {
    name: 'Read',
    path: 'read',
  },
  {
    name: 'Sing',
    path: 'sing',
  },
  {
    name: 'Write',
    path: 'write',
  },
]

const PracticesLayout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { bookId: string; chapterId: string }
}>) => {
  return (
    <main className="container py-4">
      <Breadcrumb
        type="csol"
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <Tabs
        type="csol"
        tabs={tabs}
        bookId={params.bookId}
        chapterId={params.chapterId}
      />
      <main className=" max-w-3xl mx-auto">{children}</main>
    </main>
  )
}

export default PracticesLayout
