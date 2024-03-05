import { Button } from '@/components/ui/button'
import { RotateCcw, Trash2 } from 'lucide-react'
import React from 'react'

interface DeleteButtonProps {
  deletePending: boolean
  handleDeleteHanYu: (id: string, img?: string, audio?: string) => Promise<void>
  id: string
  img?: string
  audio?: string
}
const DeleteButton = ({
  deletePending,
  handleDeleteHanYu,
  id,
  img,
  audio
}: DeleteButtonProps) => {
  return (
    <Button
      disabled={deletePending}
      variant='ghost'
      onClick={() => handleDeleteHanYu(id!, img, audio)}
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
