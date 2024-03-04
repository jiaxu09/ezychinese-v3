import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { convertFileToUrl } from '@/lib/utils'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'

type FileUploaderProps = {
  fieldChange: (files: File[]) => void
  fileUrl: string
  setFileUrl: React.Dispatch<React.SetStateAction<string>>
}

const FileUploader = ({
  fieldChange,
  fileUrl,
  setFileUrl
}: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([])

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles)
      fieldChange(acceptedFiles)
      setFileUrl(convertFileToUrl(acceptedFiles[0]))
    },
    [fieldChange, setFileUrl]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.webp']
    }
  })

  return (
    <div
      {...getRootProps()}
      className='flex-center bg-dark-3 flex cursor-pointer flex-col rounded-xl'
    >
      <input {...getInputProps()} className='cursor-pointer' />

      {fileUrl ? (
        <>
          <div className='mx-auto'>
            <div className=' relative h-[136px] w-48 '>
              <Image
                src={fileUrl}
                fill
                alt='image'
                className=' object-contain'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
          <p className='file_uploader-label'>Click or drag photo to replace</p>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center rounded-lg border p-2'>
          <UploadCloud className='mx-auto h-10 w-10 text-center' />

          <h3 className='base-medium text-light-2 mb-2 mt-6'>
            Drag or Select photo here
          </h3>
          <p className='text-light-4 small-regular mb-6'>.webp</p>
        </div>
      )}
    </div>
  )
}

export default FileUploader
