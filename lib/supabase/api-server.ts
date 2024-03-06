'use server'

import {
  CSOLSelectOrderWord,
  CSOLSelectRightChoice,
  CorrectOrder,
  FindDifference,
  FormPhrases,
  HanYuMultipleChoice,
  HanYuMultipleChoiceListening,
  HanYuSelectRightPinyin,
  HanYuSentence,
  HanYuText,
  HanYuWord,
  HanYuWriting,
  IIdiom,
  IRadical,
  RightExplanation,
} from '../types'
import { getPagination } from '../utils'
import { supabaseServer } from './server'

//storage
const deleteFile = async (fileName: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase.storage
    .from('ezyChinese')
    .remove([`${fileName}`])
  if (error) {
    throw Error
  }
}

const addTool = async (item: any, table: string) => {
  const supabase = supabaseServer()
  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from(table).insert(item)
  if (error) {
    throw new Error('Something went wrong!')
  }
}
export const addChineseRadical = async (item: IRadical) => {
  addTool(item, 'radicals')
}

export const addChineseIdiom = async (item: IIdiom) => {
  addTool(item, 'idioms')
}

const updateTool = async (item: any, id: string | null, table: string) => {
  if (!id) {
    return
  }

  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from(table).update(item).eq('id', id)
  if (error) {
    throw new Error('Something went wrong!')
  }
}

export const updateChineseRadical = async (
  item: IRadical,
  id: string | null
) => {
  updateTool(item, id, 'radicals')
}

export const updateChineseIdiom = async (item: IIdiom, id: string | null) => {
  updateTool(item, id, 'idioms')
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

const getTool = async (page: number, table: string) => {
  try {
    const supabase = supabaseServer()
    const pageSize = 30 //hardcode 30 for sm and lg screen size
    const { from, to } = getPagination(page, pageSize)
    const { data, error, count } = await supabase
      .from(table)
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)
    const hasMore = (count && (page + 1) * pageSize < count) as boolean

    return { data, hasMore }
  } catch (error) {
    return null
  }
}

export const getChineseRadicals = async (page: number) => {
  return getTool(page, 'radicals')
}

export const getChineseIdioms = async (page: number) => {
  return getTool(page, 'idioms')
}

//Quiz Form
const deleteFunction = async (id: string, table: string) => {
  const supabase = supabaseServer()
  const { data } = await supabase.auth.getSession()

  if (!id) {
    return
  }

  if (!data?.session?.user) {
    return
  }
  const { error } = await supabase.from(table).delete().eq('id', id)
  if (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}

const addFunction = async (table: string, item: any) => {
  const supabase = supabaseServer()

  const { data } = await supabase.auth.getSession()

  if (!data?.session?.user) {
    return
  }

  const { error } = await supabase.from(table).insert(item)
  if (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}

const getFunction = async (source: string, table: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('source', source)

  if (error) {
    console.log(error)
    throw Error
  }
  return data
}

export const getCorrectOrderByChapter = async (source: string) => {
  const result = (await getFunction(source, 'correct_order')) as CorrectOrder[]
  return result
}

export const getRightExplanationByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'right_explanation'
  )) as RightExplanation[]
  return result
}

export const getFormPhrasesByChapter = async (source: string) => {
  const result = (await getFunction(source, 'form_phrases')) as FormPhrases[]
  return result
}

export const getFindDifferenceByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'find_difference'
  )) as FindDifference[]
  return result
}

export const addCorrectOrder = async (item: CorrectOrder) => {
  await addFunction('correct_order', item)
}

export const addRightExplanation = async (item: RightExplanation) => {
  await addFunction('right_explanation', item)
}
export const addFormPhrases = async (item: FormPhrases) => {
  await addFunction('form_phrases', item)
}
export const addFindDifference = async (item: FindDifference) => {
  await addFunction('find_difference', item)
}

export const deleteRightExplanation = async (id: string) => {
  await deleteFunction(id, 'right_explanation')
}

export const deleteCorrectOrder = async (id: string) => {
  await deleteFunction(id, 'correct_order')
}

export const deleteFormPhrases = async (id: string) => {
  await deleteFunction(id, 'form_phrases')
}
export const deleteFindDifference = async (id: string) => {
  await deleteFunction(id, 'find_difference')
}

//Hanyu
export const getHanYuBooks = async () => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('hanyu_books')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    console.log(error)
    throw Error
  }
  return data
}

export const getHanYuUnits = async (bookId: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('hanyu_units')
    .select('*')
    .eq('book', bookId)

  if (error) {
    console.log(error)
    throw Error
  }
  return data
}

export const addHanYuWord = async (item: HanYuWord) => {
  await addFunction('hanyu_words', item)
}

export const getHanYuWordsByChapter = async (source: string) => {
  const result = (await getFunction(source, 'hanyu_words')) as HanYuWord[]
  return result
}

export const deleteHanYuWord = async (id: string) => {
  await deleteFunction(id, 'hanyu_words')
}

export const addHanYuSentence = async (item: HanYuSentence) => {
  await addFunction('hanyu_sentences', item)
}
export const getHanYuSentencesByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'hanyu_sentences'
  )) as HanYuSentence[]
  return result
}

export const deleteHanYuSentence = async (
  id: string,
  img?: string,
  audio?: string
) => {
  if (img) {
    await deleteFile(img)
  }

  if (audio) {
    await deleteFile(audio)
  }
  await deleteFunction(id, 'hanyu_sentences')
}

export const addHanYuText = async (item: HanYuText) => {
  await addFunction('hanyu_texts', item)
}
export const getHanYuTextsByChapter = async (source: string) => {
  const result = (await getFunction(source, 'hanyu_texts')) as HanYuText[]
  return result
}

export const deleteHanYuText = async (id: string) => {
  await deleteFunction(id, 'hanyu_texts')
}

export const addHanYuWriting = async (item: HanYuWriting) => {
  await addFunction('hanyu_writings', item)
}
export const getHanYuWritingsByChapter = async (source: string) => {
  const result = (await getFunction(source, 'hanyu_writings')) as HanYuWriting[]
  return result
}

export const deleteHanYuWriting = async (id: string) => {
  await deleteFunction(id, 'hanyu_writings')
}

//HanYu Quiz
export const addHanYuMultipleChoice = async (item: HanYuMultipleChoice) => {
  await addFunction('multiple_choice_hanyu', item)
}
export const getHanYuMultipleChoiceByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'multiple_choice_hanyu'
  )) as HanYuMultipleChoice[]
  return result
}

export const deleteHanYuMultipleChoice = async (id: string) => {
  await deleteFunction(id, 'multiple_choice_hanyu')
}

export const addHanYuMultipleChoiceListening = async (
  item: HanYuMultipleChoiceListening
) => {
  await addFunction('multiple_choice_listening_hanyu', item)
}
export const getHanYuMultipleChoiceListeningByChapter = async (
  source: string
) => {
  const result = (await getFunction(
    source,
    'multiple_choice_listening_hanyu'
  )) as HanYuMultipleChoiceListening[]
  return result
}

export const deleteHanYuMultipleChoiceListening = async (id: string) => {
  await deleteFunction(id, 'multiple_choice_listening_hanyu')
}

export const addHanYuSelectRightPinyin = async (
  item: HanYuSelectRightPinyin
) => {
  await addFunction('select_right_pinyin_hanyu', item)
}
export const getHanYuSelectRightPinyinByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'select_right_pinyin_hanyu'
  )) as HanYuSelectRightPinyin[]
  return result
}

export const deleteHanYuSelectRightPinyin = async (id: string) => {
  await deleteFunction(id, 'select_right_pinyin_hanyu')
}

//CSOL QUIZ
export const addCSOLSelectRightChoice = async (item: CSOLSelectRightChoice) => {
  await addFunction('select_right_choice_csol_quiz', item)
}
export const getCSOLSelectRightChoiceByChapter = async (source: string) => {
  const result = (await getFunction(
    source,
    'select_right_choice_csol_quiz'
  )) as CSOLSelectRightChoice[]
  return result
}

export const deleteCSOLSelectRightChoice = async (id: string) => {
  await deleteFunction(id, 'select_right_choice_csol_quiz')
}

export const addCSOLSelectWordOrderWords = async (
  item: CSOLSelectOrderWord
) => {
  await addFunction('select_word_order_words_csol_quiz', item)
}
export const getCSOLSelectWordByChapter = async (source: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('select_word_order_words_csol_quiz')
    .select('*')
    .eq('source', source)
    .eq('is_selected', true)

  if (error) {
    console.log(error)
    throw Error
  }
  return data as CSOLSelectOrderWord[]
}

export const getCSOLOrderWordsByChapter = async (source: string) => {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('select_word_order_words_csol_quiz')
    .select('*')
    .eq('source', source)
    .eq('is_selected', false)

  if (error) {
    console.log(error)
    throw Error
  }
  return data as CSOLSelectOrderWord[]
}

export const deleteCSOLSelectWordOrderWords = async (id: string) => {
  await deleteFunction(id, 'select_word_order_words_csol_quiz')
}
