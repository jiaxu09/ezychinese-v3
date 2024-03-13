'use client'
import { useQuery } from '@tanstack/react-query'
import React, { ChangeEvent, useState } from 'react'
import Idiom from './idiom'
import { Input } from '@/components/ui/input'
import { Cat, RotateCcw, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  convertHanziToPinyin,
  fetchIciba,
  fetchIdiom,
  fetchbaiduIdiom
} from '@/lib/api'
import { useToast } from '@/components/ui/use-toast'
import { IIdiom } from '@/lib/types'
import { useUser } from '@/lib/store/user'
import { useGetChineseIdiomsByUserId } from '@/lib/react-query/queries'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import Misc from '@/components/misc'

const Idioms = () => {
  const user = useUser(state => state.user)

  const [isEdit, setEdit] = useState(false)

  const [isLoading, setLoading] = useState(false)
  const { toast } = useToast()

  const [idiom, setIdiom] = useState<IIdiom>()

  const [searchedPhrase, setSearchPhrase] = useState<string>('')

  const [searchSource, setSearchSource] = useState<number>(0)

  const {
    data: idioms,
    isFetched,
    refetch
  } = useQuery(useGetChineseIdiomsByUserId(user?.id))

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      refetch()
      setIdiom(undefined)
    }
    setSearchPhrase(e.target.value)
  }

  const handleSearch = async () => {
    setIdiom(undefined)
    setLoading(true)

    if (searchedPhrase.length === 0) {
      setLoading(false)
      return
    }

    if (searchedPhrase.length < 4) {
      toast({
        title: '请输入4字以上成语./Please enter 4 words or more. ',
        variant: 'destructive'
      })
      setLoading(false)
      return
    }
    let result
    if (searchSource === 0) {
      //金山词霸
      result = (await fetchIciba(searchedPhrase)) as IIdiom
    }
    //Comment out as puppeteer is not working on vercel
    //  else if (searchSource === 1) {
    //   //百度翻译
    //   result = (await fetchbaiduIdiom(searchedPhrase)) as IIdiom
    // }
    else {
      // idiom.json
      result = (await fetchIdiom(searchedPhrase)) as IIdiom
    }

    try {
      if (!result) {
        toast({
          title:
            '请输入有效成语或者更换source./Please enter a valid idiom or change source. ',
          variant: 'destructive'
        })
      } else {
        setIdiom(result)
      }
    } catch (error) {
      setLoading(false)
      toast({
        title: 'Could find the idiom',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEditMode = () => {
    refetch()
    setEdit(!isEdit)
  }

  return (
    <div className=' flex w-full flex-col items-center'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4 py-4 md:w-1/2 md:flex-nowrap'>
        <div className='relative flex w-full items-center'>
          <Input
            onChange={inputHandler}
            type='text'
            placeholder='4字以上成语或谚语'
            value={searchedPhrase}
          />
          <div
            className=' absolute right-2 cursor-pointer'
            onClick={handleSearch}
          >
            {isLoading ? (
              <RotateCcw className='h-5 w-5 animate-spin' />
            ) : (
              <Search className='h-5 w-5' />
            )}
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <span>Source:</span>
          <div onClick={() => setSearchSource(0)}>
            {/* iciba */}
            <Button
              className=' h-8 w-8 rounded-full'
              variant={`${searchSource === 0 ? 'default' : 'outline'}`}
              size='icon'
            >
              1
            </Button>
          </div>

          {/* <div onClick={() => setSearchSource(1)}>
            baidu fanyi
            <Button
              className='h-8 w-8 rounded-full'
              variant={`${searchSource === 1 ? 'default' : 'outline'}`}
              size='icon'
            >
              2
            </Button>
          </div> */}

          <div onClick={() => setSearchSource(2)}>
            {/* idiom.json */}
            <Button
              className='h-8 w-8 rounded-full'
              variant={`${searchSource === 2 ? 'default' : 'outline'}`}
              size='icon'
            >
              2
            </Button>
          </div>
        </div>
      </div>
      <div className='min-h-[60vh] w-full '>
        {searchedPhrase.length > 0 && idiom ? (
          <div className='flex w-full flex-col'>
            <p className='py-6 text-lg'>Searched result</p>
            <div className='grid-cols-4 gap-6 md:grid-cols-12 md:gap-10'>
              <Idiom
                eng_meaning={idiom.eng_meaning}
                isEdit={isEdit}
                isSaved={false}
                example={idiom.example}
                example_meaning={idiom.example_meaning}
                example_pinyin={idiom.example_pinyin}
                idiom_meaning={idiom.idiom_meaning}
                idiom_pinyin={idiom.idiom_pinyin}
                name={idiom.name}
              />
            </div>
          </div>
        ) : (
          <div className='flex w-full flex-col'>
            {user ? (
              <>
                <p className='text-lg'>Your saved idioms</p>
                <div className='grid grid-cols-4 gap-6 px-4 md:grid-cols-12 md:gap-10'>
                  {idioms?.map((idiom, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-center p-2 md:p-8 '
                    >
                      <Idiom
                        eng_meaning={idiom.eng_meaning}
                        isEdit={isEdit}
                        id={idiom.id}
                        background_url={idiom.background_url}
                        example={idiom.example}
                        example_meaning={idiom.example_meaning}
                        example_pinyin={idiom.example_pinyin}
                        idiom_meaning={idiom.idiom_meaning}
                        idiom_pinyin={idiom.idiom_pinyin}
                        name={idiom.name}
                        isSaved={true}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className='relative flex h-full flex-col items-center justify-center py-20 md:py-10'>
                <div className='flex items-center justify-center font-medium'>
                  <div>
                    <Cat className='h-20 w-20 md:h-40 md:w-40' />
                  </div>
                </div>
                <h1 className=' w-2/3 py-6 text-center text-lg tracking-wide md:text-2xl'>
                  Whoops..., please sign in and save idioms...
                </h1>
                <Misc />
              </div>
            )}
          </div>
        )}
      </div>
      {user && user.role === 'admin' && (
        <div className='hidden w-full items-center justify-end md:flex'>
          <Switch
            aria-label='edit switch'
            id='edit-mode'
            checked={isEdit}
            onCheckedChange={handleEditMode}
          >
            Edit
          </Switch>
          <Label className='ml-2' htmlFor='edit-mode'>
            Edit Mode
          </Label>
        </div>
      )}
    </div>
  )
}

export default Idioms
