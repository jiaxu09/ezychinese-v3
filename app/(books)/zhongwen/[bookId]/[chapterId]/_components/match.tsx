'use client'
import { useGetLiteracyByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { convert } from 'pinyin-pro'
import WellDone from '@/components/well-done'
import placeholderImg from '/public/images/logo_lg.webp'

interface MatchProps {
  bookId: string
  chapterId: string
}

interface Card {
  id: number
  character: string
  pinyin: boolean
  match: number
  matched: boolean
}

const Match = ({ bookId, chapterId }: MatchProps) => {
  const [cards, setCards] = useState<Card[] | null>(null)
  const [gameFinished, setGameFinished] = useState(false)

  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState(false)

  const { data, isFetched } = useQuery(
    useGetLiteracyByChapter(`${bookId}-${chapterId}`)
  )

  const random_numbers = Array.from(Array(data?.answers.length).keys())
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 6)

  useEffect(() => {
    let controller = new AbortController()

    const shuffledCards = [...data?.answers!, ...data?.questions!]
      .map((character, index) => ({
        character,
        id: Math.random(),
        matched: false,
        match:
          index > data?.answers?.length! - 1
            ? index - data?.answers?.length!
            : index,
        pinyin: index > data?.answers.length! - 1,
      }))
      .filter((obj) => random_numbers.includes(obj.match))
      .sort(() => Math.random() - 0.5)
    setCards(shuffledCards)

    return () => {
      controller?.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    if (cards && cards.every((card) => card.matched === true)) {
      timeout = setTimeout(() => setGameFinished(true), 1500)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [cards])

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.match === choiceTwo.match) {
        setCards((prevCards) => {
          // @ts-ignore
          return prevCards.map((card: Card) => {
            if (card.match === choiceOne.match) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        timeout = setTimeout(() => resetTurn(), 1000)
      }
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [choiceOne, choiceTwo, setCards])

  const handleChoice = (card: Card) => {
    if (choiceOne === null || card.id !== choiceOne.id)
      //make sure the current card not click again
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  return (
    <>
      {gameFinished ? (
        <div className="flex items-center justify-center">
          <div className="w-full md:w-1/3">
            <WellDone />
          </div>
        </div>
      ) : (
        <div className="w-full md:w-2/3 mx-auto grid grid-cols-3 place-items-center gap-4 md:grid-cols-4 py-4">
          {cards?.map((card, index) => {
            let flipped =
              card === choiceOne || card === choiceTwo || card.matched
            return (
              <button
                disabled={disabled}
                className={`w-24 h-24 rounded-lg ${flipped ? 'flipped' : ''} `}
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  handleChoice(card)
                }}
                aria-label="match game"
              >
                <div className="inner relative w-24 h-24 ">
                  <div className="front">
                    <div className="text-3xl font-medium">
                      {card.pinyin ? (
                        <div className="bg-crayola rounded-lg w-24 h-24 flex items-center justify-center">
                          {convert(card.character)}
                        </div>
                      ) : (
                        <div className="bg-pewterblue rounded-lg w-24 h-24 flex items-center justify-center">
                          {card.character}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="m-back bg-accent transition-all duration-500 ease-in-out p-2">
                    <Image
                      src={placeholderImg}
                      width={180}
                      height={163}
                      alt="ezyChinese match game"
                      priority
                      sizes="33vw"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Match
