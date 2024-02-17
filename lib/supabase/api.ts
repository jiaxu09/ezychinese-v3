import { IIdiom, IRadical, TypedSupabaseClient } from '../types'
import { supabaseBrowser } from './browser'

//  Chinese Radicals
export const addChineseRadical = async (item: IRadical) => {
  const supabase = supabaseBrowser()
  const { error } = await supabase.from('radicals').insert(item)
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

export const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3
  const from = page ? page * limit : 0
  const to = page ? from + size - 1 : size - 1

  return { from, to }
}

export const getChineseRadicals = async (
  supabase: TypedSupabaseClient,
  page: number
) => {
  const pageSize = 30 //hardcode 30 for sm and lg screen size
  const { from, to } = getPagination(page, pageSize)

  const { data, error, count } = await supabase
    .from('radicals')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const hasMore = (count && (page + 1) * pageSize < count) as boolean

  if (error) {
    console.log(error)
    throw Error
  }

  return { data, hasMore }
}

//End of Chinese Radicals

//Chinese Idioms

export const addChineseIdiom = async (item: IIdiom) => {
  const supabase = supabaseBrowser()
  const { error } = await supabase.from('idioms').insert(item)
  if (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}

export const updateChineseIdiom = async (item: IIdiom, id: string | null) => {
  if (!id) {
    return
  }
  const supabase = supabaseBrowser()
  const { error } = await supabase.from('idioms').update(item).eq('id', id)
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const getChineseIdioms = async (
  supabase: TypedSupabaseClient,
  page: number
) => {
  const pageSize = 20 //hardcode 20 for sm and lg screen size
  const { from, to } = getPagination(page, pageSize)

  const { data, error, count } = await supabase
    .from('idioms')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const hasMore = (count && (page + 1) * pageSize < count) as boolean

  if (error) {
    console.log(error)
    throw Error
  }

  return { data, hasMore }
}

//End of Chinese Idioms

//Literacy

