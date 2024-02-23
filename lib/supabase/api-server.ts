'use server'

import { CorrectOrder, IIdiom, IRadical } from '../types'
import { getPagination } from '../utils'
import { supabaseServer } from './server'

export const addChineseRadical = async (item: IRadical) => {
  const supabase = supabaseServer()
  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from('radicals').insert(item)
  if (error) {
    throw new Error('Something went wrong!')
  }
  return ''
}

export const updateChineseRadical = async (
  item: IRadical,
  id: string | null
) => {
  if (!id) {
    return
  }

  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from('radicals').update(item).eq('id', id)
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const addChineseIdiom = async (item: IIdiom) => {
  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

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
  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from('idioms').update(item).eq('id', id)
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const getAuth = async () => {
  const supabase = supabaseServer()
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.log(error)
    throw Error
  }
  if (data.session?.user) {
    const { data: user } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.session.user.id)
      .single()
    if (user) {
      return user
    }
  }
  return null
}

export const getChineseRadicals = async (page: number) => {
  const supabase = supabaseServer()
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

export const getChineseIdioms = async (page: number) => {
  const pageSize = 20 //hardcode 20 for sm and lg screen size
  const { from, to } = getPagination(page, pageSize)
  const supabase = supabaseServer()
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

//Quiz Form
export const getCorrectOrderByChapter = async (source: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('correct_order')
    .select('*')
    .eq('source', source)

  if (error) {
    console.log(error)
    throw Error
  }
  return data
}

export const addCorrectOrder = async (item: CorrectOrder) => {
  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from('correct_order').insert(item)
  if (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}

export const deleteCorrectOrder = async (id: string) => {
  const supabase = supabaseServer()
  const { data } = await supabase.auth.getSession()

  if (!id) {
    return
  }

  if (!data?.session?.user) {
    return
  }
  const { error } = await supabase.from('correct_order').delete().eq('id', id)
  if (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}
