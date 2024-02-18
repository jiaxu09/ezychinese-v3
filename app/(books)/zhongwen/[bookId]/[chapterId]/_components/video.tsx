'use client'
import { useGetVideosByChapter } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface VideoProps {
  bookId: string
  chapterId: string
}

const Video = ({ bookId, chapterId }: VideoProps) => {
  const { data: videos, isFetched } = useQuery(
    useGetVideosByChapter(`${bookId}-${chapterId}`)
  )

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {videos?.map((id) => (
        <div key={id} className="w-full mb-3 aspect-w-16 aspect-h-9">
          <iframe
            className="w-full aspect-video"
            allowFullScreen
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      ))}
    </div>
  )
}

export default Video
