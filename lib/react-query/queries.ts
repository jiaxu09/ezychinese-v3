import {
  keepPreviousData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import {
  addChineseIdiom,
  addChineseRadical,
  getChineseIdioms,
  getChineseRadicals,
  updateChineseIdiom,
  updateChineseRadical,
} from '../supabase/api'
import { IIdiom, IRadical, TypedSupabaseClient } from '../types'
import { useToast } from '@/components/ui/use-toast'
import { getChaptersByBookId, getChineseBooks } from '../graphql/api'

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

export const useGetChineseRadicals = (
  client: TypedSupabaseClient,
  page: number
) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESERADICALS, page],
    queryFn: () => getChineseRadicals(client, page),
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

export const useGetChineseIdioms = (
  client: TypedSupabaseClient,
  page: number
) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESEIDIOMS, page],
    queryFn: () => getChineseIdioms(client, page),
    placeholderData: keepPreviousData,
  }
}

//End of Chinese Idioms

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
