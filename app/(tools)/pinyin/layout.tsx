import React from 'react'
import Tabs from './_components/tabs'

const PinyinLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
  params: { bookId: string; chapterId: string }
}>) => {
  return (
    <div className=" container p-4">
      <Tabs />
      <main className=" max-w-3xl mx-auto min-h-[70vh]">{children}</main>
    </div>
  )
}

export default PinyinLayout
