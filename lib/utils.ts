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
  return englishEquivalent || '';
}

export const extractIciba = (baesInfo: any, sentences: any, bidce: any) => {
  const example = sentences
    ? sentences.map((sentence: any) => ({
        cn: sentence.cn,
        en: sentence.en,
      }))
    : []

  const { symbols: bisymbols } = bidce

  const meaning_bisymbols = bisymbols.filter(
    (item: any) => item.parts.length > 0
  )

  let meaning
  let meaning_1
  if (meaning_bisymbols.length > 0) {
    meaning_1 = meaning_bisymbols.map((item: any) => ({
      pinyin: item.word_symbol,
      mp3: '',
      explanation: item.parts.map((i: any) => ({
        partsOfSpeech: `${convertChineseToEnglishPartsOfSpeech(i.part_name)}`,
        en_mean: i.means[0].word_mean ?? '',
      })),
    }))
  }
  const { symbols } = baesInfo
  const meaning_2 = symbols.map((item: any) => ({
    pinyin: item.word_symbol ?? '',
    mp3: item.symbol_mp3 ?? '',
    explanation: item.parts.map((i: any) => ({
      partsOfSpeech: `(${convertChineseToEnglishPartsOfSpeech(i.part)})`,
      en_mean: i.means.join(';'),
    })),
  }))
  if (
    meaning_2.some((i: any) =>
      i.explanation.some((j: any) => j.partsOfSpeech === '(unknown)')
    )
  ) {
    meaning = meaning_1
  } else {
    meaning = meaning_2
  }
  return {
    example,
    meaning,
  }
}

export function isJsonString(str:string) {
  try {
      JSON.parse(str);
      return true;
  } catch (e) {
    console.log(e);
      return false;
  }
}