import React from 'react'
import Breadcrumb from './_components/breadcrumb'
import Tabs from './_components/tabs'

const PracticesLayout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { bookId: string; chapterId: string }
}>) => {
  return (
    <main className="container py-4">
      <Breadcrumb bookId={params.bookId} chapterId={params.chapterId} />
      <Tabs bookId={params.bookId} chapterId={params.chapterId} />
      {children}
    </main>
  )
}

export default PracticesLayout