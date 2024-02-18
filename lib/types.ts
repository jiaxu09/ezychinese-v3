import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from './database.types'

export type TypedSupabaseClient = SupabaseClient<Database>

export interface IUser {
  created_at: string
  display_name: string | null
  email: string
  id: string
  image_url: string | null
  role: string
}

export interface IRadical {
  name: string
  radical_pinyin?: string
  radical_meaning?: string
  characters: string[]
  characters_pinyins: string[]
  characters_meanings?: string[]
  background_url?: string
  radical_explain?: string[]
  radical_explain_pinyin?: string[]
}

export interface IIdiom {
  name: string[]
  idiom_pinyin: string[]
  idiom_meaning?: string
  example: string[]
  example_pinyin: string[]
  example_meaning: string
  background_url?: string
}

export interface IBook {
  id: string
  name: string
  slug: string
  imgUrl: string
}

export interface IChapter {
  id: string
  name: string
  slug: string
  img: {
    url: string
    width: number
    height: number
  }
  book: {
    slug: string
    name: string
  }
}

export interface ILiteracies {
  answers: string[]
  questions: string[]
}

export interface IWords {
  words: string[]
  wordsAudio: { url: string }[]
  wordsImages: {
    height: string
    width: string
    url: string
  }[]
}
