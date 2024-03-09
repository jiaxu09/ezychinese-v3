'use server'
import {
  SpeechConfig,
  SpeechSynthesizer,
} from 'microsoft-cognitiveservices-speech-sdk'
import { bufferToBase64 } from './utils'

export default async function getVoice(sentence: string) {
  const speechServicesKey = process.env.MS_SPEECHSERVICES_KEY
  const speechServicesRegion = process.env.MS_SPEECHSERVICES_REGION
  const voiceName = 'zh-CN-XiaoxiaoNeural'

  if (!(speechServicesKey && speechServicesRegion)) return

  const speechConfig = SpeechConfig.fromSubscription(
    speechServicesKey,
    speechServicesRegion
  )
  speechConfig.speechSynthesisVoiceName = voiceName
  const synthesizer = new SpeechSynthesizer(speechConfig)

  const url: string = await new Promise((resolve, reject) => {
    synthesizer.speakTextAsync(
      sentence,
      (result) => {
        if (result) {
          synthesizer.close()
          resolve(bufferToBase64(result.audioData))
        }
      },
      () => {
        synthesizer.close()
        reject()
      }
    )
  })

  return url
}
