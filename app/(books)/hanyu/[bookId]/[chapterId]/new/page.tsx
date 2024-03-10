import React from 'react'
import NewPractices from './_components/new-practices'
import HanziPinyinConverter from '@/components/hanzi-pinyin-converter'

interface NewPracticesPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}
const NewPracticesPage = ({ params }: NewPracticesPageProps) => {
  return (
    <div className=' grid grid-cols-3'>
      <div className=' col-span-2'>
        <NewPractices bookId={params.bookId} chapterId={params.chapterId} />
      </div>
      <div>
        <HanziPinyinConverter />
      </div>
    </div>
  )
}

export default NewPracticesPage
