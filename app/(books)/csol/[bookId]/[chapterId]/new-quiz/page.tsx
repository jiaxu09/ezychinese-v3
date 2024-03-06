import Unauthorized from '@/components/unauthorized'
import { supabaseServer } from '@/lib/supabase/server'
import React from 'react'
import NewQuiz from '../_components/new-quiz/new-quiz'

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
      <div>
        <Unauthorized />
      </div>
    )
  }
  return (
    <div className='w-full '>
      <NewQuiz bookId={params.bookId} chapterId={params.chapterId} />
    </div>
  )
}

export default NewQuizPage
