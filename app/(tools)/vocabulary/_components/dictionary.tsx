'use client'
import IcibaMeaning from '@/app/(books)/_components/literacy/iciba-meaning'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import getVoice from '@/lib/speech'
import { Vocabulary } from '@/lib/types'
import { RotateCcw, Volume2 } from 'lucide-react'
import React, { useState } from 'react'

interface DictionaryProps {
  vocabulary?: Vocabulary
  searchedWord: string[]
}

const Dictionary = ({ vocabulary, searchedWord }: DictionaryProps) => {
  const [isSoundLoading, setIsSoundLoading] = useState(false)
  const handleSound = (url?: string) => {
    if (url) {
      const audio = new Audio(url)
      audio?.play()
    }
  }

  const handleSpeech = async () => {
    setIsSoundLoading(true)
    const base64 = await getVoice(searchedWord.join(''))
    if (base64) {
      const audio = new Audio('data:audio/wav;base64,' + base64)
      audio?.play()
    }
    setIsSoundLoading(false)
  }
  return (
    <div className='w-full '>
      {vocabulary && (
        <div>
          <h2 className='pb-4'>Chinese English Dictionary</h2>
          <div className='py-2'>
            {isSoundLoading ? (
              <RotateCcw className=' h-8 w-8 animate-spin text-crayola' />
            ) : (
              <div
                aria-label='ezyChinese hanzi sound'
                className='cursor-pointer'
                onClick={handleSpeech}
              >
                <Volume2 className='h-8 w-8 text-crayola ' />
              </div>
            )}
          </div>
          <Tabs defaultValue={Object.keys(vocabulary)[0]} className='w-full'>
            <TabsList className=''>
              {Object.keys(vocabulary).map((item, index) => (
                <TabsTrigger className=' capitalize' key={index} value={item}>
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
            {vocabulary.hasOwnProperty('brief definition') && (
              <TabsContent
                className=' max-h-[70vh] overflow-y-auto'
                value='brief definition'
              >
                <div className='flex flex-col justify-center space-y-2 text-lg'>
                  {vocabulary['brief definition']?.map((item, index) => (
                    <div key={index} className='flex space-x-2'>
                      <div className=' text-gray-500'>{item.entry}:</div>
                      <div>{item.explain}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
            {vocabulary.hasOwnProperty('dictionary 1') && (
              <TabsContent
                className=' max-h-[70vh] overflow-y-auto'
                value='dictionary 1'
              >
                <div className='flex flex-col space-y-3 py-2'>
                  {vocabulary['dictionary 1'] && (
                    <IcibaMeaning
                      meaning={vocabulary['dictionary 1'].meaning}
                      handleSound={handleSound}
                    />
                  )}

                  {/* {vocabulary['dictionary 1']?.map((item, index) => (
                    <div className='flex flex-col space-y-2' key={index}>
                      <p className=' italic text-gray-400'>{item.parts}</p>
                      <div className='flex flex-col'>
                        {item?.sentences?.map((s, i) => (
                          <div className='flex flex-col text-lg' key={i}>
                            <p className='pl-2'>- {s.meaning}</p>
                            <div className='flex flex-col py-2 pl-4'>
                              {s?.example?.map((e, j) => (
                                <div key={j} className='flex flex-col'>
                                  <p className=' text-gray-500'>{e.cn}</p>
                                  <p>{e.en}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))} */}
                </div>
              </TabsContent>
            )}
            {vocabulary.hasOwnProperty('dictionary 2') && (
              <TabsContent
                className=' max-h-[70vh] overflow-y-auto'
                value='dictionary 2'
              >
                <div className='flex flex-col'>
                  <p className=' py-2 text-gray-400'>
                    /{vocabulary['dictionary 2']?.pinyin}/
                  </p>
                  <div className=' flex flex-col text-lg'>
                    {vocabulary['dictionary 2']?.example?.map((item, index) => (
                      <div className='flex flex-col' key={index}>
                        <p>-{item.en_meaning}</p>
                        <p className=' text-gray-500'>{item.sentences}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )}
            {vocabulary.hasOwnProperty('dictionary 3') && (
              <TabsContent
                className=' max-h-[70vh] overflow-y-auto'
                value='dictionary 3'
              >
                <div className='flex flex-col space-y-3 py-2'>
                  {vocabulary['dictionary 3']?.map((item, index) => (
                    <div className='flex flex-col space-y-2' key={index}>
                      <p className=' italic text-gray-400'>{item.parts}</p>
                      <div className='flex flex-col'>
                        {item?.sentences?.map((s, i) => (
                          <div className='flex flex-col text-lg' key={i}>
                            <p className='pl-2'>- {s.meaning}</p>
                            <div className='flex flex-col py-2 pl-4'>
                              {s?.example?.map((e, j) => (
                                <div key={j} className='flex flex-col'>
                                  <p className=' text-gray-500'>{e.cn}</p>
                                  <p>{e.en}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
            {vocabulary.hasOwnProperty('dictionary 4') && (
              <TabsContent
                className=' max-h-[70vh] overflow-y-auto'
                value='dictionary 4'
              >
                <div className='flex flex-col'>
                  {vocabulary['dictionary 4']?.map((item, index) => (
                    <div key={index} className=''>
                      <p className='py-2 text-gray-400'>
                        /{item.pinyin.replaceAll('[', '').replaceAll(']', '')}/
                      </p>
                      <div className='flex flex-col text-lg'>
                        {item.example?.map((ex, i) => (
                          <div className='flex flex-col' key={i}>
                            <p>{ex.en_meaning}</p>
                            <p>{ex.zh_meaning}</p>
                            <div>
                              {ex.sentences?.map((e, j) => (
                                <div className='flex flex-col' key={j}>
                                  <p>{e.zh}</p>
                                  <p>{e.en}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      )}
    </div>
  )
}

export default Dictionary
