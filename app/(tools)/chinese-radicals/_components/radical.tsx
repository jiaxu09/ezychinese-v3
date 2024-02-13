import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import supabaseUrl, { cn, shimmer, toBase64 } from '@/lib/utils'
import Image from 'next/image'
import { useChineseRadicalEdit } from '@/lib/store/radicalEdit'
import RadicalForm from './radical-form'
import Hero from '/public/images/placeholder.webp'

interface RadicalProps {
  id: string
  name: string
  characters: string[]
  background_url?: string | null
}

const Radical = ({ name, characters, background_url, id }: RadicalProps) => {
  const edit = useChineseRadicalEdit((state) => state.edit)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DialogTrigger>
      {edit ? (
        <DialogContent>
          <div>
            <h2 className=" text-center pb-4">Edit Radical</h2>
            <RadicalForm
              radical={{ name, characters, background_url, id }}
              action="Edit"
            />
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md md:max-w-4xl h-[30vh] md:h-[75vh]">
          <div className="z-10 relative container flex items-center justify-center ">
            <div className="border rounded-full p-2 md:p-6 bg-card">{name}</div>
            {characters.map((character, index) => (
              <div
                key={index}
                className={cn(' absolute', {
                  'right-[0%] md:right-[30%]': index === 0,
                  'left-[0%] md:left-[30%]': index === 1,
                  'top-[0%]': index === 2,
                  'bottom-[0%]': index === 3,
                })}
              >
                <Card>
                  <CardContent className="text-sm md:text-3xl p-4">
                    <div className="pt-4">
                      <ruby>
                        <span className=" inline-block">{character}</span>
                        <rt>yi</rt>
                      </ruby>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className=" fixed top-0 right-0 w-full h-full z-0 ">
            <Image
              className=" object-contain blur-sm"
              src={
                background_url && background_url.length !== 0
                  ? supabaseUrl(background_url)
                  : Hero
              }
              alt={name}
              fill
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Radical
