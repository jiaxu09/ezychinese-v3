import React from 'react'
import Breadcrumb from '../_components/breadcrumb'
import Practices from '../_components/tabs'

interface LiteracyProps {
  params: {
    bookId: string
    chapterId: string
  }
}
const LiteracyPage = ({ params }: LiteracyProps) => {
  return (
    <main>
      <div className="container mx-auto ">
        {/* <Practices bookId={params.bookId} chapterId={params.chapterId} /> */}
      </div>
    </main>
  )
}

export default LiteracyPage
