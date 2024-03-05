import { supabaseBrowser } from './browser'

export const uploadFileToStorage = async (audioFile: any, folder: string) => {
  if (audioFile) {
    const fileExt = audioFile.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `mp3/${fileName}`
    const supabase = supabaseBrowser()
    const { error, data } = await supabase.storage
      .from('ezyChinese')
      .upload(filePath, audioFile)
    if (!error) {
      return data.path
    }
  }
  return null
}
