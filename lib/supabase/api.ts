import { IRadical, TypedSupabaseClient } from '../types'
import { supabaseBrowser } from './browser'

export const addChineseRadical = async (item: IRadical) => {
  const supabase = supabaseBrowser()
  const { error } = await supabase.from('radicals').insert({
    name: item.name,
    characters: item.characters,
    background_url: item.background_url,
  })
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const updateChineseRadical = async (
  item: IRadical,
  id: string | null
) => {
  if (!id) {
    return
  }
  const supabase = supabaseBrowser()
  const { error } = await supabase.from('radicals').update(item).eq('id', id)
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const getChineseRadicals = async (supabase: TypedSupabaseClient) => {
  const { data, error } = await supabase
    .from('radicals')
    .select()
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error)
    throw Error
  }

  return data
}
