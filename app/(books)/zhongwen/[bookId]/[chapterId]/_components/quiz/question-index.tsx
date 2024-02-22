import React from 'react'
import { CheckCheck } from 'lucide-react'

interface QuestionIndexProps {
  index: number
  isCompleted: boolean
}

const QuestionIndex = ({ index, isCompleted }: QuestionIndexProps) => {
  return (
    <div className="flex justify-start items-center w-10 text-xl">
      <span>{index + 1}.</span>
      {isCompleted && (
        <CheckCheck className="animate-ping animate-twice text-green w-6 h-6  animate-delay-200 animate-ease-in animate-normal" />
      )}
    </div>
  )
}

export default QuestionIndex
