import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export default function supabaseUrl( src:string | null) {
  if(src){
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/ezyChinese/${src}`
  }
  return ''
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;


export  const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3
  const from = page ? page * limit : 0
  const to = page ? from + size - 1 : size - 1

  return { from, to }
}

export function bufferToBase64(buffer: ArrayBuffer) {
  const bytes = String.fromCharCode.apply(
    null,
    new Uint8Array(buffer) as unknown as number[]
  );
  return btoa(bytes);
}

const chineseToEnglishPartsOfSpeech: Record<string, string> = {
  名: 'noun',
  动: 'verb',
  形: 'adjective',
  副: 'adverb',
  代: 'pronoun',
  连: 'conjunction',
  介: 'preposition',
  叹: 'interjection',
  量: 'quantifier',
  数:  'number'
}

/**
 * Converts a Chinese part of speech to its English equivalent.
 * @param chinesePartOfSpeech - The Chinese part of speech (e.g., 名, 动, 形).
 * @returns The English equivalent or 'unknown' if not found.
 */
export function convertChineseToEnglishPartsOfSpeech(chinesePartOfSpeech: string): string {
  const englishEquivalent = chineseToEnglishPartsOfSpeech[chinesePartOfSpeech];
  return englishEquivalent || 'unknown';
}