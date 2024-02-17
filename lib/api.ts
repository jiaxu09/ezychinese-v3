import * as googleTTS from 'google-tts-api'

export const getHanziSound = (character: string) => {
  try {
    if (character) {
      const url = googleTTS.getAudioUrl(`${character}`, {
        lang: 'zh',
        slow: false,
        host: 'https://translate.google.com',
      })
      return url
    }
    return ''
  } catch (error) {
    throw Error
  }
}

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
    const data = await fetch(`/api/english?text=${character}`)

    const result = await data.json()
    return result.english
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
