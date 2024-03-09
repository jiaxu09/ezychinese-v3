'use client'
import React, { useEffect } from 'react'

interface AudioPlayerProps {
  base64?: string
}
const AudioPlayer = ({ base64 }: AudioPlayerProps) => {
  useEffect(() => {
    if (base64) {
      const audio = new Audio('data:audio/wav;base64,' + base64)
      audio?.play()
    }
  }, [base64])

  return <div></div>
}

export default AudioPlayer
