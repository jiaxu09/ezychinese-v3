'use client'
import { Pinyin } from '@/lib/types'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

interface FinalsWholeSyllablesProps {
  pinyins: Pinyin[] | undefined
}
const FinalsWholeSyllables = ({ pinyins }: FinalsWholeSyllablesProps) => {
  const [selectedPinyin, setSelectedPinyin] = useState<string | null>(null)

  const Ref_a = useRef(null)
  const Ref_b = useRef(null)
  const Ref_c = useRef(null)
  const Ref_d = useRef(null)
  const Ref_e = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  const handleFinalTones = (name: string) => {
    setSelectedPinyin(name)
  }

  const hanlePinyinSound = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }

  const handleOutsideClick = (e: any) => {
    if (
      Ref_a.current &&
      //@ts-ignore
      !Ref_a.current.contains(e.target) &&
      Ref_b.current &&
      //@ts-ignore
      !Ref_b.current.contains(e.target) &&
      Ref_c.current &&
      //@ts-ignore
      !Ref_c.current.contains(e.target) &&
      Ref_d.current &&
      //@ts-ignore
      !Ref_d.current.contains(e.target) &&
      Ref_e.current &&
      //@ts-ignore
      !Ref_e.current.contains(e.target)
    ) {
      setSelectedPinyin(null)
    }
  }
  return (
    <div className="container grid grid-cols-3 md:grid-cols-5 py-5">
      {pinyins?.map((item, index) => (
        <div
          key={item.id}
          className="relative flex items-center justify-center  w-[100px] h-[100px]"
        >
          <Button
            aria-label="ezyChinese pinyin sound"
            ref={Ref_a}
            size="icon"
            onClick={() => handleFinalTones(item.name)}
            variant="outline"
          >
            {item.name}
          </Button>
          {selectedPinyin === item.name && (
            <>
              <Button
                aria-label="ezyChinese pinyin sound a"
                ref={Ref_b}
                onClick={() => hanlePinyinSound(item.tones[0].url)}
                className=" rounded-full absolute left-8 -top-2"
                variant="outline"
                size="sm"
              >
                ˉ
              </Button>
              <Button
                aria-label="ezyChinese pinyin sound b"
                ref={Ref_c}
                onClick={() => hanlePinyinSound(item.tones[1].url)}
                className="rounded-full absolute top-8 -right-1"
                variant="outline"
                size="sm"
              >
                ˊ
              </Button>
              <Button
                aria-label="ezyChinese pinyin sound c"
                ref={Ref_d}
                onClick={() => hanlePinyinSound(item.tones[2].url)}
                className="rounded-full absolute top-8 -left-1"
                variant="outline"
                size="sm"
              >
                ˇ
              </Button>
              <Button
                aria-label="ezyChinese pinyin sound d"
                ref={Ref_e}
                onClick={() => hanlePinyinSound(item.tones[3].url)}
                className="rounded-full absolute -bottom-2 left-8"
                variant="outline"
                size="sm"
              >
                ˋ
              </Button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default FinalsWholeSyllables
