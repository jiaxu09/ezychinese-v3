'use client'
import React from 'react'
import { Tooltip } from 'react-tooltip'
import ReactAudioPlayer from 'react-audio-player'
import supabaseUrl from '@/lib/utils'

interface StoryProps {
  story?: {
    zh: string[]
    pinyin: string[]
    en: string
  }[]
  audio?: string
}
const Story = ({ story, audio }: StoryProps) => {
  return (
    <div className='flex w-full flex-col space-y-2'>
      <div className='flex w-full justify-center'>
        {audio && (
          <ReactAudioPlayer
            src={supabaseUrl(`${audio}`)}
            controls
            controlsList='nodownload noremoteplayback'
          />
        )}
      </div>
      <div className=' flex w-full flex-wrap gap-1'>
        {story?.map((item, index) => (
          <div
            data-tooltip-id={`${item.en}+${index}`}
            className='flex cursor-pointer items-center justify-center  hover:border-b hover:border-dashed hover:border-gray-300'
            key={index}
          >
            {item.zh.map((zh, i) => (
              <div key={i}>
                <ruby className='px-1'>
                  <span className='inline-block md:text-lg'>{zh}</span>
                  <rt className='text-sm text-gray-600 md:text-lg'>
                    {item.pinyin[i]}
                  </rt>
                </ruby>
              </div>
            ))}
            <Tooltip id={`${item.en}+${index}`}>
              <div>{item.en}</div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Story
