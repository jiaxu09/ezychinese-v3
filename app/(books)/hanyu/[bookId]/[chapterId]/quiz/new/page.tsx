import React from 'react'
import NewQuiz from './_components/new-quiz'
import { supabaseServer } from '@/lib/supabase/server'
import Unauthorized from '@/components/unauthorized'

interface NewQuizPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const NewQuizPage = async ({ params }: NewQuizPageProps) => {
  const supabase = await supabaseServer()
  const { data } = await supabase.auth.getSession()

  if (!data.session?.user) {
    return (
      <div className='mx-auto w-full '>
        <Unauthorized />
      </div>
    )
  }
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className=' col-span-2'>
        <NewQuiz bookId={params.bookId} chapterId={params.chapterId} />
      </div>
    </div>
  )
}

export default NewQuizPage
