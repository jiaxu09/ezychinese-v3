import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import React from 'react'

interface ChoiceButtonProps {
  selectedChoices: string[]
  choice: string
  handleSelectedChoice: (choice: string) => void
  rightAnswer: string
}
const ChoiceButton = ({
  selectedChoices,
  choice,
  handleSelectedChoice,
  rightAnswer
}: ChoiceButtonProps) => {
  return (
    <Button
      aria-label='ezyChinese hanyu'
      variant='outline'
      disabled={selectedChoices.includes(choice)}
      onClick={() => handleSelectedChoice(choice)}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-lg border border-primary p-6 text-xl',
        selectedChoices.includes(choice)
          ? choice === rightAnswer
            ? 'animate-wiggle bg-green-400 animate-duration-1000 animate-once animate-ease-in-out'
            : ' bg-red-600'
          : ''
      )}
    >
      {choice}
      {selectedChoices.includes(choice) && choice === rightAnswer && (
        <Sparkles className=' absolute left-1 top-0 animate-ping text-yellow-400 animate-duration-1000 animate-infinite  animate-ease-in-out' />
      )}
    </Button>
  )
}

export default ChoiceButton
