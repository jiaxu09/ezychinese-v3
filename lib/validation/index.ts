import * as z from 'zod'

export const RadicalValidation = z.object({
  background: z.custom<File[]>(),
  name: z.string().min(1, { message: 'Radical is required.' }),
  characters: z.string().min(1, { message: 'Characters are required.' }),
})
