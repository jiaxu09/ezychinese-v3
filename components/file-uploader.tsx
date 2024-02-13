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
  setFileUrl,
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
      'image/*': ['.png', '.jpeg', '.jpg', '.webp'],
    },
  })

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full lg:p-10">
            <div className=" relative w-48 h-32 ">
              <Image
                src={fileUrl}
                fill
                alt="image"
                className=" object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <p className="file_uploader-label">Click or drag photo to replace</p>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center border rounded-lg p-2">
          <UploadCloud className="w-10 h-10 text-center mx-auto" />

          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag or Select photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">.webp</p>
        </div>
      )}
    </div>
  )
}

export default FileUploader
