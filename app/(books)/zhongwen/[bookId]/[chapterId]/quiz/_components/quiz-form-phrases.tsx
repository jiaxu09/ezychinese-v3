'use client'
import React, { Dispatch, useState } from 'react'
import FormPhrases from './quiz/form-phrases'

interface QuizFormPhrasesProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

interface FormPhrases {
  choices_a: string[]
  choices_b: string[]
  answers: string[]
}

const QuizFormPhrases = ({
  quiz,
  setCurrentCompleted,
}: QuizFormPhrasesProps) => {
  const [form_phrases] = useState<FormPhrases[]>(quiz.form_phrases)


  return (
    <div className="flex flex-col items-center justify-center w-full animate-fade-left animate-duration-1000 animate-ease-in-out animate-fill-both">
      <h1 className="pb-4 text-center">点击并匹配词语</h1>
      <FormPhrases
        choices_a={form_phrases[0]['choices_a']}
        choices_b={form_phrases[0]['choices_b']}
        answers={form_phrases[0]['answers']}
        setCurrentCompleted={setCurrentCompleted}
      />
    </div>
  )
}

export default QuizFormPhrases
