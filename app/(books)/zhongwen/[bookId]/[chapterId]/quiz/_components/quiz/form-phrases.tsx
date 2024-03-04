import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import React, { Dispatch, useEffect, useState } from 'react'

interface FormPhrasesProps {
  choices_a: string[]
  choices_b: string[]
  answers: string[]
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}
const FormPhrases = ({
  choices_a,
  choices_b,
  answers,
  setCurrentCompleted
}: FormPhrasesProps) => {
  const [selectedA, setSelectedA] = useState<string | null>(null)
  const [selectedB, setSelectedB] = useState<string | null>(null)

  const [correctSelection, setCorrectSelection] = useState<string[]>([])

  const [incorrectSelection, setIncorrectSelection] = useState<boolean>(false)

  useEffect(() => {
    if (selectedA && selectedB) {
      if (
        answers.some(
          a =>
            a.split('').includes(selectedA) && a.split('').includes(selectedB)
        )
      ) {
        setCorrectSelection([...correctSelection, `${selectedA}${selectedB}`])
        setSelectedA(null)
        setSelectedB(null)
        setIncorrectSelection(false)
      } else {
        setIncorrectSelection(true)
      }
    }

    if (answers.length === correctSelection.length) {
      setCurrentCompleted(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, selectedA, selectedB])
  return (
    <div className='grid grid-cols-2 gap-20 pb-2 md:flex md:flex-col md:gap-10'>
      <div className='flex flex-col items-center gap-6 md:flex-row'>
        {choices_a.map(char => (
          <Button
            className='relative w-12'
            aria-label='ezyChinese form phrases'
            disabled={correctSelection.includes(char)}
            onClick={() => setSelectedA(char)}
            key={char}
            variant={
              (selectedA === char && !incorrectSelection) ||
              correctSelection.some(c => c.split('').includes(char))
                ? 'success'
                : incorrectSelection && selectedA === char
                  ? 'destructive'
                  : 'outline'
            }
          >
            {char}
            {correctSelection.some(c => c.split('').includes(char)) && (
              <Sparkles className='absolute left-0 top-[8%] h-4 w-4 animate-ping text-yellow-300 animate-duration-1000 animate-twice animate-ease-linear' />
            )}
          </Button>
        ))}
      </div>
      <div className='flex flex-col items-center gap-6 md:flex-row'>
        {choices_b.map(char => (
          <Button
            aria-label='ezyChinese form phrases'
            disabled={correctSelection.includes(char)}
            onClick={() => setSelectedB(char)}
            key={char}
            className='relative w-12'
            variant={
              (selectedB === char && !incorrectSelection) ||
              correctSelection.some(c => c.split('').includes(char))
                ? 'success'
                : incorrectSelection && selectedB === char
                  ? 'destructive'
                  : 'outline'
            }
          >
            {char}
            {correctSelection.some(c => c.split('').includes(char)) && (
              <Sparkles className='absolute bottom-[8%] right-0 h-4 w-4 animate-ping text-yellow-300 animate-duration-1000 animate-twice animate-ease-linear' />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FormPhrases
