import { Strokes } from './types'

export const pinyinTone = async (words: string[]) => {
  const response = await fetch('/api/pinyin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(words),
  })

  return (await response.json()) as string[]
}

export const convertHanziToPinyin = async (words: string) => {
  try {
    const response = await fetch('/api/pinyinpro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(words),
    })

    return (await response.json()) as string[]
  } catch (error) {
    return []
  }
}

export const fetchAPI = async (searchedPhrases: string, source: string) => {
  try {
    const response = await fetch(`/api/${source}?text=${searchedPhrases}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (error) {
    return null
  }
}

export const fetchChineseStrokes = async () => {
  const response = await fetch('/api/strokes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response.json()) as Strokes[]
}
