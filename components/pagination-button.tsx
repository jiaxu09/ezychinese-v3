import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationButtonProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  isPlaceholderData: boolean
  hasMore: boolean | undefined
}
const PaginationButton = ({
  page,
  setPage,
  isPlaceholderData,
  hasMore
}: PaginationButtonProps) => {
  return (
    <div className=' pb-10 '>
      <div className='flex items-center justify-center space-x-4'>
        <Button
          aria-label='Previous'
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 0}
          variant='outline'
        >
          <ChevronLeft className='h-5 w-5' /> Prev
        </Button>
        <Button
          aria-label='Next'
          disabled={isPlaceholderData || !hasMore}
          onClick={() => {
            if (!isPlaceholderData && hasMore) {
              setPage(old => old + 1)
            }
          }}
          variant='outline'
        >
          Next <ChevronRight className='h-5 w-5' />{' '}
        </Button>
      </div>
    </div>
  )
}

export default PaginationButton
