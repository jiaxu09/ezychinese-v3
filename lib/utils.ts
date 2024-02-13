import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export default function supabaseUrl( src:string) {
  return `https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/${src}`
}
