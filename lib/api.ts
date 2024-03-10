export const getHanziDictionary = async (character: string) => {
  try {
    if (!character) {
      return
    }
    const data = await fetch(`/api/dictionary?text=${character}`)

    const result = await data.json()

    return result
  } catch (error) {
    throw Error
  }
}

export const getHanziEnglish = async (character: string) => {
  try {
    if (!character) {
      return
    }
    const data = await fetch(`/api/youdao?text=${character}`)

    const result = await data.json()
    return result
  } catch (error) {
    throw Error
  }
}

export const getHanziMeaning = async (character: string) => {
  try {
    if (!character) {
      return
    }
    const data = await fetch(`/api/meaning?text=${character}`)

    const result = await data.json()
    return result.explanation
  } catch (error) {
    throw Error
  }
}

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
