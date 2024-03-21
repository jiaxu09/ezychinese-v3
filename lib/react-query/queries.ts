import {
  keepPreviousData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import {
  CSOLSelectOrderWord,
  CSOLSelectRightChoice,
  CorrectOrder,
  FindDifference,
  FormPhrases,
  HanYuMultipleChoice,
  HanYuMultipleChoiceListening,
  HanYuSelectRightPinyin,
  HanYuSentence,
  HanYuText,
  HanYuWord,
  HanYuWriting,
  IIdiom,
  IRadical,
  PinyinCategories,
  RightExplanation,
  Story,
} from '../types'
import { useToast } from '@/components/ui/use-toast'
import {
  addCSOLSelectRightChoice,
  addCSOLSelectWordOrderWords,
  addHanYuMultipleChoice,
  addHanYuMultipleChoiceListening,
  addHanYuSelectRightPinyin,
  addHanYuSentence,
  addHanYuText,
  addHanYuWriting,
  addStory,
  deleteCSOLSelectRightChoice,
  deleteCSOLSelectWordOrderWords,
  deleteChineseIdiom,
  deleteHanYuMultipleChoice,
  deleteHanYuMultipleChoiceListening,
  deleteHanYuSelectRightPinyin,
  deleteHanYuSentence,
  deleteHanYuText,
  deleteHanYuWord,
  deleteHanYuWriting,
  getCSOLOrderWordsByChapter,
  getCSOLSelectRightChoiceByChapter,
  getCSOLSelectWordByChapter,
  getChineseIdiomsByUserId,
  getHanYuMultipleChoiceByChapter,
  getHanYuMultipleChoiceListeningByChapter,
  getHanYuSelectRightPinyinByChapter,
  getHanYuSentencesByChapter,
  getHanYuTextsByChapter,
  getHanYuWordsByChapter,
  getHanYuWritingsByChapter,
} from '../supabase/api-server'
import {
  getFlashcardsByCategory,
  getFlashcardsCategories,
  getPinyinByCategory,
  getQiHunAllEpisodes,
  getQiHunEpisodeDetails,
  getReadingByChapter,
  getSingByChapter,
} from '../graphql/api'
import {
  addFindDifference,
  addHanYuWord,
  deleteFindDifference,
  getFindDifferenceByChapter,
  getHanYuBooks,
  getHanYuUnits,
} from '../supabase/api-server'
import {
  getCSOLBooks,
  getChaptersByBookId,
  getChineseBooks,
  getLiteracyByChapter,
  getVideoByChapter,
  getWordsByChapter,
} from '../graphql/api'
import { fetchAPI, fetchChineseStrokes, pinyinTone } from '../api'
import {
  addChineseIdiom,
  addChineseRadical,
  addCorrectOrder,
  addFormPhrases,
  addRightExplanation,
  deleteCorrectOrder,
  deleteFormPhrases,
  deleteRightExplanation,
  getAuth,
  getChineseRadicals,
  getCorrectOrderByChapter,
  getFormPhrasesByChapter,
  getRightExplanationByChapter,
  updateChineseIdiom,
  updateChineseRadical,
} from '../supabase/api-server'
import getVoice from '../speech'

//speech
export const useGetSpeech = (word: string, enabled: boolean) => {
  return {
    queryKey: [QUERY_KEYS.GETSPEECH, word],
    queryFn: () => getVoice(word),
    enabled: enabled,
    staleTime: 10 * (60 * 1000) * 6 * 24, // 1day
    cacheTime: 15 * (60 * 1000) * 6 * 24, // 1day
  }
}

//convert hanzi to pinyin
export const useGetPinYin = (words: string[]) => {
  return {
    queryKey: [QUERY_KEYS.GETPINYIN, words],
    queryFn: () => pinyinTone(words),
  }
}

//Chinese Radicals
export const useAddChineseRadical = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IRadical) => addChineseRadical(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESERADICALS],
      })
      toast({
        title: 'Cool! Radical created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useUpdateChineseRadical = (id: string | null) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IRadical) => updateChineseRadical(item, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESERADICALS],
      })
      toast({
        title: 'Cool! Radical updated successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetChineseRadicals = (page: number) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESERADICALS, page],
    queryFn: () => getChineseRadicals(page),
    placeholderData: keepPreviousData,
  }
}

//End of Chinese Radicals

//Chinese Idioms
export const useSaveChineseIdiom = (name: string[], userId?: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IIdiom) => addChineseIdiom(item),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, userId],
      }),
        toast({
          title: 'Cool! Idiom created successfully. ',
          variant: 'success',
        })
    },
  })
}

export const useUpdateChineseIdiom = (id: string | null, userId?: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IIdiom) => updateChineseIdiom(item, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, userId],
      }),
        toast({
          title: 'Cool! Idiom updated successfully. ',
          variant: 'success',
        })
    },
  })
}

export const useGetChineseIdiomsByUserId = (userId?: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, userId],
    queryFn: () => getChineseIdiomsByUserId(userId),
    enabled: !!userId,
  }
}

export const useDeleteChineseIdiom = (userId?: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id?: string) => deleteChineseIdiom(id, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, userId],
      })
      toast({
        title: 'Cool! Idiom removed successfully. ',
        variant: 'success',
      })
    },
  })
}
//End of Chinese Idioms

//Pinyin
export const useGetChinesePinyinByCategory = (category: PinyinCategories) => {
  return {
    queryKey: [QUERY_KEYS.GETPINYINBYCATEGORY, category],
    queryFn: () => getPinyinByCategory(category),
  }
}
//Chinese strokes
export const useGetChineseStrokes = () => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESESTROKES],
    queryFn: () => fetchChineseStrokes(),
  }
}

//Flashcards
export const useGetFlashcardsCategories = () => {
  return {
    queryKey: [QUERY_KEYS.GETFLASHCARDSCATEGORIES],
    queryFn: () => getFlashcardsCategories(),
  }
}
export const useGetFlashcardsByCategory = (category: string) => {
  return {
    queryKey: [QUERY_KEYS.GETFLASHCARDSCATEGORIES, category],
    queryFn: () => getFlashcardsByCategory(category),
  }
}

/***************END OF TOOLS************* */
// Literacy

export const useHanziDictionary = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIDICTIONARY, character],
    queryFn: () => fetchAPI(character, 'dictionary'),
    enabled: character.length !== 0,
  }
}

export const useHanziEnglish = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIENGLISH, character],
    queryFn: () => fetchAPI(character, 'youdao'),
    enabled: character.length !== 0,
  }
}

export const useHanziIcibaMeaning = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIICIBAMEANING, character],
    queryFn: () => fetchAPI(character, 'iciba-zi'),
    enabled: character.length !== 0,
  }
}
//End of literacy

//Word

//Chinese Books Graphql

export const useGetChineseBooks = () => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESEBOOKS],
    queryFn: () => getChineseBooks(),
  }
}

export const useGetChaptersByBookId = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCHAPTERSBYBOOKID],
    queryFn: () => getChaptersByBookId(slug),
  }
}

export const useGetLiteracyByChapter = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETLITERACYBYCHAPTER, slug],
    queryFn: () => getLiteracyByChapter(slug),
  }
}

export const useGetWordsByChapter = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETWORDSBYCHAPTER, slug],
    queryFn: () => getWordsByChapter(slug),
  }
}

export const useGetVideosByChapter = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETVideoBYCHAPTER, slug],
    queryFn: () => getVideoByChapter(slug),
  }
}

// END OF Chinese Books

//CSOL
export const useGetCSOLBooks = () => {
  return {
    queryKey: [QUERY_KEYS.GETCSOLBOOKS],
    queryFn: () => getCSOLBooks(),
  }
}

export const useGetSingByChapter = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETSINGBYCHAPTER, slug],
    queryFn: () => getSingByChapter(slug),
  }
}

export const useGetReadingByChapter = (slug: string) => {
  return {
    queryKey: [QUERY_KEYS.GETREADINGBYCHAPTE, slug],
    queryFn: () => getReadingByChapter(slug),
  }
}

//Auth supabase
export const useGetAuth = () => {
  return {
    queryKey: [QUERY_KEYS.GETAUTH],
    queryFn: () => getAuth(),
    staleTime: 10 * (60 * 1000) * 6, // 1day
    cacheTime: 15 * (60 * 1000) * 6, // 1day
  }
}

//Quiz Form
export const useGetCorrectOrderByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCORRECTORDERBYCHAPTER, source],
    queryFn: () => getCorrectOrderByChapter(source),
  }
}

export const useAddCorrectOrder = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: CorrectOrder) => addCorrectOrder(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCORRECTORDERBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 连词成句 created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteCorrectOrder = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteCorrectOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCORRECTORDERBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 连词成句 deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetRightExplanationByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETRIGHTEXPLANATIONBYCHAPTER, source],
    queryFn: () => getRightExplanationByChapter(source),
  }
}

export const useAddRightExplanation = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: RightExplanation) => addRightExplanation(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETRIGHTEXPLANATIONBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 选择正确解释 created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteRightExplanationByChapter = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteRightExplanation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETRIGHTEXPLANATIONBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 选择正确解释 deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetFormPhrasesByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETFORMPHRASESBYCHAPTER, source],
    queryFn: () => getFormPhrasesByChapter(source),
  }
}

export const useAddFormPhrases = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: FormPhrases) => addFormPhrases(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETFORMPHRASESBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 组成词语 created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteFormPhrases = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteFormPhrases(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETFORMPHRASESBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 组成词语 deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetFindDifferenceByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETFINDDIFFERENCEBYCHAPTER, source],
    queryFn: () => getFindDifferenceByChapter(source),
  }
}

export const useAddFindDifference = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: FindDifference) => addFindDifference(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETFINDDIFFERENCEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 找出不同 created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteFindDifference = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteFindDifference(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETFINDDIFFERENCEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 找出不同 deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

//Videos
export const useGetQiHunEpisodes = () => {
  return {
    queryKey: [QUERY_KEYS.GETQIHUNALLEPISODES],
    queryFn: () => getQiHunAllEpisodes(),
  }
}

export const useGetQiHunEpisodeDetails = (episode: string) => {
  return {
    queryKey: [QUERY_KEYS.GETQIHUNEPISODEDETAILS, episode],
    queryFn: () => getQiHunEpisodeDetails(episode),
  }
}

//Hanyu
export const useGetHanYuBooks = () => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUBOOKS],
    queryFn: () => getHanYuBooks(),
  }
}

export const useGetHanYuUnits = (book: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUUNITS, book],
    queryFn: () => getHanYuUnits(book),
  }
}

export const useAddHanYuWords = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuWord) => addHanYuWord(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUWORDSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 生字/Words created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuWordsByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUWORDSBYCHAPTER, source],
    queryFn: () => getHanYuWordsByChapter(source),
  }
}

export const useDeleteHanYuWord = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuWord(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUWORDSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 生字/Words deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuSentencesByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUSENTENCESBYCHAPTER, source],
    queryFn: () => getHanYuSentencesByChapter(source),
  }
}

export const useAddHanYuSentence = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuSentence) => addHanYuSentence(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUSENTENCESBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 句子/Sentences created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuSentence = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: ({
      id,
      img,
      audio,
    }: {
      id: string
      img?: string
      audio?: string
    }) => deleteHanYuSentence(id, img, audio),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUSENTENCESBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 句子/Sentences deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuTextsByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUTEXTSBYCHAPTER, source],
    queryFn: () => getHanYuTextsByChapter(source),
  }
}

export const useAddHanYuText = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuText) => addHanYuText(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUTEXTSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 课本/Text created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuText = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuText(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUTEXTSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 课本/Text deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuWritingssByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUWRITINGSBYCHAPTER, source],
    queryFn: () => getHanYuWritingsByChapter(source),
  }
}

export const useAddHanYuWriting = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuWriting) => addHanYuWriting(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUWRITINGSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 汉字/Writing created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuWriting = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuWriting(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUWRITINGSBYCHAPTER, source],
      })
      toast({
        title: 'Cool! 汉字/Writing deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

//Hanyu Quiz

export const useGetHanYuMultipleChoiceByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICEBYCHAPTER, source],
    queryFn: () => getHanYuMultipleChoiceByChapter(source),
  }
}

export const useAddHanYuMultipleChoice = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuMultipleChoice) => addHanYuMultipleChoice(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuMultipleChoice = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuMultipleChoice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuMultipleChoiceListeningByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICELISTENINGBYCHAPTER, source],
    queryFn: () => getHanYuMultipleChoiceListeningByChapter(source),
  }
}

export const useAddHanYuMultipleChoiceListening = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuMultipleChoiceListening) =>
      addHanYuMultipleChoiceListening(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICELISTENINGBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuMultipleChoiceListening = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuMultipleChoiceListening(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUMULTIPLECHOICELISTENINGBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetHanYuSelectRightPinyinByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANYUSELECTRIGHTPINYINBYCHAPTER, source],
    queryFn: () => getHanYuSelectRightPinyinByChapter(source),
  }
}

export const useAddHanYuSelectRightPinyin = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: HanYuSelectRightPinyin) =>
      addHanYuSelectRightPinyin(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUSELECTRIGHTPINYINBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteHanYuSelectRightPinyin = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteHanYuSelectRightPinyin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETHANYUSELECTRIGHTPINYINBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

//CSOL QUIZ
export const useAddCSOLSelectRightChoice = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: CSOLSelectRightChoice) => addCSOLSelectRightChoice(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLSELECTRIGHTCHOICEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useAddCSOLOrderWords = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: CSOLSelectOrderWord) =>
      addCSOLSelectWordOrderWords(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLORDERWORDSBYCHAPTAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetCSOLOrderWordsByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCSOLORDERWORDSBYCHAPTAPTER, source],
    queryFn: () => getCSOLOrderWordsByChapter(source),
  }
}

export const useDeleteCSOLOrderWords = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteCSOLSelectWordOrderWords(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLORDERWORDSBYCHAPTAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteCSOLSelectWord = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteCSOLSelectWordOrderWords(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLSELECTWORDBYCHAPTAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetCSOLSelectWordByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCSOLSELECTWORDBYCHAPTAPTER, source],
    queryFn: () => getCSOLSelectWordByChapter(source),
  }
}

export const useAddCSOLSelectWord = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: CSOLSelectOrderWord) =>
      addCSOLSelectWordOrderWords(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLSELECTWORDBYCHAPTAPTER, source],
      })
      toast({
        title: 'Cool! Question created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useDeleteCSOLSelectRightChoice = (source: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (id: string) => deleteCSOLSelectRightChoice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCSOLSELECTRIGHTCHOICEBYCHAPTER, source],
      })
      toast({
        title: 'Cool! Question deleted successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetCSOLSelectRightChoiceByChapter = (source: string) => {
  return {
    queryKey: [QUERY_KEYS.GETCSOLSELECTRIGHTCHOICEBYCHAPTER, source],
    queryFn: () => getCSOLSelectRightChoiceByChapter(source),
  }
}

//Leveled Reading
export const useAddStory = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: Story) => addStory(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETLEVELEDREADINGSTORY],
      })
      toast({
        title: 'Cool! Story created successfully. ',
        variant: 'success',
      })
    },
  })
}
