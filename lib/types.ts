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

export interface ISing {
  singMp3: {
    url: string
  }
  singImg: {
    url: string
    width: number
    height: number
  }
}

export interface IReading {
  reading: string[]
  readingPinyin: string[]
  readingEng: string[]
  readingMp3: {
    url: string
  }
}

export type CorrectOrder = {
  id?: string
  question: string[]
  answer: string
  source: string
}

export type RightExplanation = {
  id?: string
  sentence: string
  choices: string[]
  answer: string
  question: string
  source: string
}

export type FormPhrases = {
  id?: string
  choices_a: string[]
  choices_b: string[]
  answers: string[]
  source: string
}

export type FindDifference = {
  id?: string
  question: string[]
  answer: string
  source: string
}

export type QiHunEpisode = {
  episode: string
}

export type QiHunEpisodeDetails = {
  episode: string
  videoId: string
  pinyinSub: { to: string; from: string; text: string }[]
  id: string
  zhSub: { to: string; from: string; text: string }[]
  thumbnail: {
    url: string
    width: string
    height: String
  }
  engSub: { to: string; from: string; text: string }[]
}

export type PinyinCategories = 'initials' | 'finals' | 'whole syllables'

export type Pinyin = {
  id: string
  name: string
  number: number
  subcategory: ''
  tones: {
    fileName: string
    url: string
  }[]
  category: PinyinCategories
}

//HanYu
export type HanYuWord = {
  id?: string
  hanzi: string
  pinyin: string
  english: string
  audio: string
  source: string
}
export type HanYuSentence = {
  id?: string
  sentence: string
  image: string
  audio: string
  source: string
}

export type HanYuText = {
  id?: string
  sentence: string
  image: string
  audio: string
  source: string
}

export type HanYuWriting = {
  id?: string
  hanzi: string[]
  source: string
}

//HanYu Quiz
export type HanYuMultipleChoice = {
  question: string
  choices: string[]
  rightAnswer: string
  source: string
}

export type HanYuMultipleChoiceListening = {
  audio: string
  choices: string[]
  right_answer: string
  source: string
}

export type HanYuSelectRightPinyin = {
  audio: string
  choices: string[]
  right_answer: string
  source: string
}
