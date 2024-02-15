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
  hasMore,
}: PaginationButtonProps) => {
  return (
    <div className="fixed bottom-20 md:bottom-32 ">
      <div className="flex items-center justify-center space-x-4">
        <Button
          aria-label="Previous"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
          variant="default"
        >
          <ChevronLeft className="w-5 h-5" /> Prev
        </Button>
        <Button
          aria-label="Next"
          disabled={isPlaceholderData || !hasMore}
          onClick={() => {
            if (!isPlaceholderData && hasMore) {
              setPage((old) => old + 1)
            }
          }}
          variant="default"
        >
          Next <ChevronRight className="w-5 h-5" />{' '}
        </Button>
      </div>
    </div>
  )
}

export default PaginationButton
