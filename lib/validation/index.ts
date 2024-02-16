import * as z from 'zod'

export const RadicalValidation = z.object({
  background: z.custom<File[]>(),
  name: z.string().min(1, { message: 'Radical is required.' }),
  radical_pinyin: z.string().optional(),
  radical_meaning: z.string().optional(),
  radical_explain: z.string().optional(),
  radical_explain_pinyin: z.string().optional(),
  characters: z.string().min(1, { message: 'Characters are required.' }),
  characters_pinyins: z
    .string()
    .min(1, { message: 'Characters pinyin are required.' }),
  characters_meanings: z.string().optional(),
})

export const IdiomValidation = z.object({
  background: z.custom<File[]>(),
  name: z.string().min(1, { message: 'Idiom is required.' }),
  idiom_pinyin: z.string().min(1, { message: 'Pinyin is required.' }),
  idiom_meaning: z.string().min(1, { message: 'English is required.' }),
  example: z.string().min(1, { message: 'Example is required.' }),
  example_pinyin: z.string().min(1, { message: 'Example pinyin is required.' }),
  example_meaning: z
    .string()
    .min(1, { message: 'Example meaning is required.' }),
})
