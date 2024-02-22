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
  setCurrentCompleted,
}: FormPhrasesProps) => {
  const [selectedA, setSelectedA] = useState<string | null>(null)
  const [selectedB, setSelectedB] = useState<string | null>(null)

  const [correctSelection, setCorrectSelection] = useState<string[]>([])

  const [incorrectSelection, setIncorrectSelection] = useState<boolean>(false)

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedA && selectedB) {
      if (
        answers.some(
          (a) =>
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
    <div className="grid grid-cols-2 md:flex md:flex-col gap-20 md:gap-10 pb-2">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {choices_a.map((char) => (
          <Button
            className="w-12 relative"
            aria-label="ezyChinese form phrases"
            disabled={correctSelection.includes(char)}
            onClick={() => setSelectedA(char)}
            key={char}
            variant={
              (selectedA === char && !incorrectSelection) ||
              correctSelection.some((c) => c.split('').includes(char))
                ? 'success'
                : incorrectSelection && selectedA === char
                ? 'destructive'
                : 'outline'
            }
          >
            {char}
            {correctSelection.some((c) => c.split('').includes(char)) && (
              <Sparkles className="w-4 h-4 top-[8%] left-0 text-yellow-300 animate-ping animate-twice animate-duration-1000 animate-ease-linear absolute" />
            )}
          </Button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {choices_b.map((char) => (
          <Button
            aria-label="ezyChinese form phrases"
            disabled={correctSelection.includes(char)}
            onClick={() => setSelectedB(char)}
            key={char}
            className="w-12 relative"
            variant={
              (selectedB === char && !incorrectSelection) ||
              correctSelection.some((c) => c.split('').includes(char))
                ? 'success'
                : incorrectSelection && selectedB === char
                ? 'destructive'
                : 'outline'
            }
          >
            {char}
            {correctSelection.some((c) => c.split('').includes(char)) && (
              <Sparkles className="w-4 h-4 bottom-[8%] right-0 text-yellow-300 animate-ping animate-twice animate-duration-1000 animate-ease-linear absolute" />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FormPhrases
