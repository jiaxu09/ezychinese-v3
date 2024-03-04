import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import supabaseUrl, { cn, rgbDataURL } from '@/lib/utils'

interface ImageDialogProps {
  img: string
}
const ImageDialog = ({ img }: ImageDialogProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ImageIcon className='h-6 w-6 cursor-pointer' />
      </DialogTrigger>
      <DialogContent>
        <div className='relative mx-auto h-[200px] w-[300px]'>
          <Image
            className={cn(
              ' object-contain p-2 transition-opacity duration-200',
              !isLoaded ? 'opacity-0' : '  opacity-100'
            )}
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(216, 222, 233)}
            sizes='33vw'
            src={supabaseUrl(`${img}`)}
            alt='ezyChinese 连词成句'
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageDialog
