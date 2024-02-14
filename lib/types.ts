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
}
