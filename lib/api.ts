import * as googleTTS from 'google-tts-api'

export const getHanziSound = (character: string) => {
  if (character) {
    const url = googleTTS.getAudioUrl(`${character}`, {
      lang: 'zh',
      slow: false,
      host: 'https://translate.google.com',
    })
    return url
  }
  return ''
}
