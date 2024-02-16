import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <Skeleton className="w-[250px] h-[250px] md:w-[800px] md:h-[400px] bg-gray-300 rounded-lg" />
    </div>
  )
}

export default Loading
