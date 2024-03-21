import * as z from 'zod'

//Hanzi To Pinyin
export const HanziToPinyinValidation = z.object({
  hanzi: z.string().min(1, { message: 'Hanzi is required.' }),
})

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
  eng_meaning: z.string().min(1, { message: 'Example pinyin is required.' }),
  example_meaning: z
    .string()
    .min(1, { message: 'Example meaning is required.' }),
})

// Quiz
export const CorrectOrderValidation = z.object({
  question: z.string().min(1, { message: 'Question is required.' }),
  answer: z.string().min(1, { message: 'Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const RightExplanationValidation = z.object({
  sentence: z.string().min(1, { message: 'Sentence is required.' }),
  choices: z.string().min(1, { message: 'Choices is required.' }),
  answer: z.string().min(1, { message: 'Answer is required.' }),
  question: z.string().min(1, { message: 'Question is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const FormPhrasesValidation = z.object({
  choices_a: z.string().min(1, { message: 'Choice_a is required.' }),
  choices_b: z.string().min(1, { message: 'Choice_b is required.' }),
  answers: z.string().min(1, { message: 'Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const FindDifferenceValidation = z.object({
  question: z.string().min(1, { message: 'question is required.' }),
  answer: z.string().min(1, { message: 'Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

//Hanyu
export const HanYuWordsValidation = z.object({
  hanzi: z.string().min(1, { message: 'Hanzi is required.' }),
  pinyin: z.string().min(1, { message: 'Pinyin is required.' }),
  english: z.string().min(1, { message: 'English is required.' }),
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const HanYuSentenceValidation = z.object({
  sentence: z.string().min(1, { message: 'Sentence is required.' }),
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  image: z.custom<File[]>(),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const HanYuTextValidation = z.object({
  sentence: z.string().min(1, { message: 'Sentence is required.' }),
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  image: z.custom<File[]>(),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const HanYuWritingValidation = z.object({
  characters: z.string().min(1, { message: 'Sentence is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

//Hanyu Quiz
export const HanYuMultipleChoiceValidation = z.object({
  question: z.string().min(1, { message: 'Question is required.' }),
  choices: z.string().min(1, { message: 'Choice is required.' }),
  rightAnswer: z.string().min(1, { message: 'Right Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const AudioChoiceRightAnswerValidation = z.object({
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  choices: z.string().min(1, { message: 'Choices is required.' }),
  rightAnswer: z.string().min(1, { message: 'Right Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

//CSOL QUIZ
export const SelectOrderWordsValidation = z.object({
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  choices: z.string().min(1, { message: 'Choices is required.' }),
  rightAnswer: z.string().min(1, { message: 'Right Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

export const SelectRightChoiceValidation = z.object({
  question: z.string().min(1, { message: 'Question is required.' }),
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
  choices: z.string().min(1, { message: 'Choices is required.' }),
  rightAnswer: z.string().min(1, { message: 'Right Answer is required.' }),
  source: z.string().min(1, { message: 'Source is required.' }),
})

//leveled reading
const stringToJSONSchema = z.string().transform(
  (str, ctx): z.infer<ReturnType<typeof JSON.parse>> => {
    try {
      return JSON.parse(str)
    } catch (e) {
      ctx.addIssue({ code: 'custom', message: 'Invalid JSON' })
      return z.never()
    }
  }
)

export const StoryValidation = z.object({
  thumbnail: z.custom<File[]>(),
  level: z.string().min(1, { message: 'Level is required.' }),
  zh_title: z.string().min(1, { message: 'Chinese title is required.' }),
  en_title: z.string().min(1, { message: 'English title is required.' }),
  story: z.string().min(1, { message: 'Please enter a valid json file.' }),
  en_story: z.string().min(1, { message: 'English story is required..' }),
  grammar: z.string().min(1, { message: 'Please enter a valid json file.' }),
  exercises: z.string().min(1, { message: 'Please enter a valid json file.' }),
  audio: z
    .any()
    .refine((file) => file?.length == 1, 'Audio is required.')
    .refine((file) => file[0]?.size <= 1000000, `Max file size is 1MB.`),
})
