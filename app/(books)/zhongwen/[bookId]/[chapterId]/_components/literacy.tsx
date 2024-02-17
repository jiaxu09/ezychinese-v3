'use client'
import { Button } from '@/components/ui/button'
import {
  useGetLiteracyByChapter,
  useHanziDictionary,
  useHanziEnglish,
  useHanziMeaning,
  useHanziSound,
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import HanziWriter from 'hanzi-writer'
import { PenLine, RotateCcw, Volume2 } from 'lucide-react'

import Dictionary from './literacy/dictionary'
import English from './literacy/english'
import Meaning from './literacy/meaning'

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

  const { data: soundUrl, isLoading: isLoadingSound } = useQuery(
    useHanziSound(selectedCharacter)
  )

  const { data: dictionary, isLoading: isLoadingDictionary } = useQuery(
    useHanziDictionary(selectedCharacter)
  )

  const { data: english, isLoading: isLoadingEnglish } = useQuery(
    useHanziEnglish(selectedCharacter)
  )

  const { data: meaning, isLoading: isLoadingMeaning } = useQuery(
    useHanziMeaning(selectedCharacter)
  )

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

  const handleAnimateReset = () => {
    if (quiz && selectedCharacter) {
      quiz.setCharacter(selectedCharacter)
      quiz.quiz()
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
            <div
              aria-label="ezyChinese hanzi animate"
              className=" cursor-pointer"
              onClick={handleAnimate}
            >
              <PenLine className="w-6 h-6 text-pastelblue " />
            </div>
            <div>
              {isLoadingSound ? (
                <RotateCcw className=" h-6 w-6 animate-spin text-crayola" />
              ) : (
                <div
                  aria-label="ezyChinese hanzi sound"
                  className=" cursor-pointer"
                >
                  <Volume2
                    onClick={handleSound}
                    className="w-6 h-6 text-crayola "
                  />
                </div>
              )}
            </div>
            <div className=" cursor-pointer">
              {isLoadingDictionary ? (
                <RotateCcw className=" h-6 w-6 animate-spin text-orange" />
              ) : (
                <Dictionary
                  strokes={dictionary?.strokes}
                  radical={dictionary?.radicals}
                  pinyin={dictionary?.pinyin}
                />
              )}
            </div>
            <div className=" cursor-pointer">
              {isLoadingEnglish ? (
                <RotateCcw className=" h-6 w-6 animate-spin text-skyblue" />
              ) : (
                <English english={english} />
              )}
            </div>
            <div className=" cursor-pointer">
              {isLoadingMeaning ? (
                <RotateCcw className=" h-6 w-6 animate-spin text-wuzzy" />
              ) : (
                <Meaning meaning={meaning} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
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
          <div className=" cursor-pointer" onClick={handleAnimateReset}>
            <RotateCcw className=" h-6 w-6  text-green" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Literacy
