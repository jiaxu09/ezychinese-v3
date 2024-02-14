import * as z from 'zod'

export const RadicalValidation = z.object({
  background: z.custom<File[]>(),
  name: z.string().min(1, { message: 'Radical is required.' }),
  radical_pinyin: z.string().optional(),
  radical_meaning: z.string().optional(),
  characters: z.string().min(1, { message: 'Characters are required.' }),
  characters_pinyins: z
    .string()
    .min(1, { message: 'Characters pinyin are required.' }),
  characters_meanings: z.string().optional(),
})

export const IdiomValidation = z.object({
  
})
