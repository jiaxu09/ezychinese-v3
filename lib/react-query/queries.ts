import {
  keepPreviousData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import {
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
} from '../types'
import { useToast } from '@/components/ui/use-toast'
import {
  addHanYuMultipleChoice,
  addHanYuMultipleChoiceListening,
  addHanYuSelectRightPinyin,
  addHanYuSentence,
  addHanYuText,
  addHanYuWriting,
  deleteHanYuMultipleChoice,
  deleteHanYuMultipleChoiceListening,
  deleteHanYuSelectRightPinyin,
  deleteHanYuSentence,
  deleteHanYuText,
  deleteHanYuWord,
  deleteHanYuWriting,
  getHanYuMultipleChoiceByChapter,
  getHanYuMultipleChoiceListeningByChapter,
  getHanYuSelectRightPinyinByChapter,
  getHanYuSentencesByChapter,
  getHanYuTextsByChapter,
  getHanYuWordsByChapter,
  getHanYuWritingsByChapter,
} from '../supabase/api-server'
import {
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
import {
  getHanziDictionary,
  getHanziEnglish,
  getHanziSound,
  getHanziMeaning,
} from '../api'
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
  getChineseIdioms,
  getChineseRadicals,
  getCorrectOrderByChapter,
  getFormPhrasesByChapter,
  getRightExplanationByChapter,
  updateChineseIdiom,
  updateChineseRadical,
} from '../supabase/api-server'

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
export const useAddChineseIdiom = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IIdiom) => addChineseIdiom(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESEIDIOMS],
      })
      toast({
        title: 'Cool! Idiom created successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useUpdateChineseIdiom = (id: string | null) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useMutation({
    mutationFn: (item: IIdiom) => updateChineseIdiom(item, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GETCHINESEIDIOMS],
      })
      toast({
        title: 'Cool! Idiom updated successfully. ',
        variant: 'success',
      })
    },
  })
}

export const useGetChineseIdioms = (page: number) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, page],
    queryFn: () => getChineseIdioms(page),
    placeholderData: keepPreviousData,
  }
}

//End of Chinese Idioms

//Pinyin
export const useGetChinesePinyinByCategory = (category: PinyinCategories) => {
  return {
    queryKey: [QUERY_KEYS.GETPINYINBYCATEGORY, category],
    queryFn: () => getPinyinByCategory(category),
  }
}

// Literacy
export const useHanziSound = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZISOUND, character],
    queryFn: () => getHanziSound(character),
    enabled: character.length !== 0,
  }
}

export const useHanziDictionary = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIDICTIONARY, character],
    queryFn: () => getHanziDictionary(character),
    enabled: character.length !== 0,
  }
}

export const useHanziEnglish = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIENGLISH, character],
    queryFn: () => getHanziEnglish(character),
    enabled: character.length !== 0,
  }
}

export const useHanziMeaning = (character: string) => {
  return {
    queryKey: [QUERY_KEYS.GETHANZIMEANING, character],
    queryFn: () => getHanziMeaning(character),
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
