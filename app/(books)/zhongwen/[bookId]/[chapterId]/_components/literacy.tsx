'use client'
import { Button } from '@/components/ui/button'
import {
  useGetLiteracyByChapter,
  useHanziSound,
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import HanziWriter from 'hanzi-writer'
import { BookMarked, Languages, PenLine, Scroll, Volume2 } from 'lucide-react'

interface LiteracyProps {
  bookId: string
  chapterId: string
}
const Literacy = ({ bookId, chapterId }: LiteracyProps) => {
  const [writer, setWriter] = useState<HanziWriter | null>(null)
  const [quiz, setQuiz] = useState<HanziWriter | null>(null)

  const [selectedCharacter, setSelectedCharacter] = useState('')

  const { data, isFetched } = useQuery(
    useGetLiteracyByChapter(`${bookId}-${chapterId}`)
  )

  const { data: soundUrl } = useQuery(useHanziSound(selectedCharacter))

  const handleCharacterClick = (character: string) => {
    setSelectedCharacter(character)
    if (!writer) {
      setWriter(
        HanziWriter.create('character-target-div', `${character}`, {
          width: 200,
          height: 200,
          padding: 5,
          strokeAnimationSpeed: 1,
        })
      )
    } else {
      writer?.setCharacter(character)
    }

    if (!quiz) {
      const quiz = HanziWriter.create('character-quiz-div', `${character}`, {
        width: 200,
        height: 200,
        padding: 5,
        showCharacter: false,
      })
      setQuiz(quiz)
      quiz.quiz()
    } else {
      quiz.setCharacter(character)
      quiz.quiz()
    }
  }

  const handleAnimate = () => {
    if (selectedCharacter) {
      writer?.animateCharacter()
    }
  }

  const handleSound = () => {
    if (soundUrl) {
      const audio = new Audio(soundUrl)
      audio.play()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="grid grid-cols-5 gap-6">
        {data?.answers.map((char, index) => (
          <div key={index} className="p-2 flex items-center justify-center">
            <Button
              onClick={() => handleCharacterClick(char)}
              variant="outline"
            >
              {char}
            </Button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="character-target-div"
            className="w-[200px] h-[200px] border-2 border-secondary"
          >
            <line x1="0" y1="0" x2="192" y2="192" stroke="#DDD" />
            <line x1="192" y1="0" x2="0" y2="192" stroke="#DDD" />
            <line x1="96" y1="0" x2="96" y2="192" stroke="#DDD" />
            <line x1="0" y1="96" x2="192" y2="96" stroke="#DDD" />
          </svg>
          <div className="flex items-center justify-center space-x-3">
            <div className=" cursor-pointer" onClick={handleAnimate}>
              <PenLine className="w-6 h-6 text-pastelblue " />
            </div>
            <div className=" cursor-pointer" onClick={handleSound}>
              <Volume2 className="w-6 h-6 text-crayola " />
            </div>
            <div>
              <Scroll className="w-6 h-6 text-orange " />
            </div>
            <div>
              <Languages className="w-6 h-6 text-skyblue " />
            </div>
            <div>
              <BookMarked className="w-6 h-6 text-wuzzy " />
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="character-quiz-div"
          className="w-[200px] h-[200px] border-2 border-primary"
        >
          <line x1="0" y1="0" x2="192" y2="192" stroke="#DDD" />
          <line x1="192" y1="0" x2="0" y2="192" stroke="#DDD" />
          <line x1="96" y1="0" x2="96" y2="192" stroke="#DDD" />
          <line x1="0" y1="96" x2="192" y2="96" stroke="#DDD" />
        </svg>
      </div>
    </div>
  )
}

export default Literacy
