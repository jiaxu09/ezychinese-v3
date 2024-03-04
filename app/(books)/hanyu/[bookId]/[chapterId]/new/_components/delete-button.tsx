import { Button } from '@/components/ui/button'
import { RotateCcw, Trash2 } from 'lucide-react'
import React from 'react'
interface DeleteButtonProps {
  deletePending: boolean
  handleDeleteHanYuWord: (id: string) => Promise<void>
  id: string
}
const DeleteButton = ({
  deletePending,
  handleDeleteHanYuWord,
  id
}: DeleteButtonProps) => {
  return (
    <Button
      disabled={deletePending}
      variant='ghost'
      onClick={() => handleDeleteHanYuWord(id!)}
    >
      {deletePending ? (
        <RotateCcw className='h-4 w-4 animate-spin text-watermarker' />
      ) : (
        <Trash2 className='h-4 w-4 text-destructive' />
      )}
    </Button>
  )
}

export default DeleteButton
