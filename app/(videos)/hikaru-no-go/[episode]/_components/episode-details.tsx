'use client'
import { useGetQiHunEpisodeDetails } from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

interface EpisodeDetailsProps {
  episode: string
}

type Sub = {
  to: string
  from: string
  text: string
}
const EpisodeDetails = ({ episode }: EpisodeDetailsProps) => {
  const { data, isFetched } = useQuery(useGetQiHunEpisodeDetails(episode))
  const [player, setPlayer] = useState(null)
  const [playing, setPlaying] = useState(false)

  const [zhSub, setZhSub] = useState<string[] | undefined>([])
  const [pinyinSub, setPinyinSub] = useState<string[] | undefined>([])
  const [enSub, setEnSub] = useState<string | undefined>('')

  if (isFetched && !data) {
    notFound()
  }
  const opts = {
    playerVars: {
      origin: 'https://www.youtube.com',
    },
  }

  const handlePlay: YouTubeProps['onPlay'] = (event) => {
    setPlaying(true)
  }
  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    setPlayer(event.target)
  }

  useEffect(() => {
    if (playing) {
      const handle = setInterval(() => {
        //@ts-ignore
        const time: number = player.getCurrentTime()

        const zhCurrent: Sub | undefined = data?.zhSub?.find(
          (cap) => Number(cap.from) <= time && Number(cap.to) >= time
        )
        const pinyinCurrent: Sub | undefined = data?.pinyinSub?.find(
          (cap) => Number(cap.from) <= time && Number(cap.to) >= time
        )
        const engCurrent: Sub | undefined = data?.engSub?.find(
          (cap) => Number(cap.from) <= time && Number(cap.to) >= time
        )

        setPinyinSub(pinyinCurrent?.text.split(' '))
        setZhSub(zhCurrent?.text.replace(/\s+/g, '').split(''))
        setEnSub(engCurrent?.text.trim())
      }, 100)
      return () => clearInterval(handle)
    }
  }, [data?.engSub, data?.pinyinSub, player, playing, data?.zhSub])

  return (
    <div className="w-full py-2 flex flex-col gap-10">
      <div className="flex items-center justify-center w-full ">
        <YouTube
          iframeClassName="w-full h-[400px] aspect-video"
          videoId={data?.videoId}
          onStateChange={handleStateChange}
          onPlay={handlePlay}
          opts={opts}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 py-10 md:py-0 h-[180px]">
        <div className="flex items-center text-lg md:text-5xl space-x-1">
          {pinyinSub &&
            zhSub?.map((char, index) => (
              <ruby key={index} className="">
                <span className="  inline-block">{char}</span>
                <rt className=" text-gray-600 ">{pinyinSub[index]}</rt>
              </ruby>
            ))}
        </div>
        <p className=" text-gray-600 text-lg md:text-3xl">{enSub}</p>
      </div>
    </div>
  )
}

export default EpisodeDetails
