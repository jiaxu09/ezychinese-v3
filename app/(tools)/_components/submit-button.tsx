import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import React from 'react'

interface SubmitButtonProps {
  type: string
  createdPeding: boolean
  updatedPending: boolean
}
const SubmitButton = ({
  type,
  createdPeding,
  updatedPending,
}: SubmitButtonProps) => {
  return (
    <Button
      aria-label={`${type} submit`}
      disabled={createdPeding || updatedPending}
      variant="default"
      type="submit"
    >
      {createdPeding || updatedPending ? (
        <>
          <RotateCcw className="mr-2 h-5 w-5 animate-spin" />{' '}
          <span>Submiting</span>
        </>
      ) : (
        <span>Submit</span>
      )}
    </Button>
  )
}

export default SubmitButton
