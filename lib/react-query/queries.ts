import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import {
  addChineseRadical,
  getChineseRadicals,
  updateChineseRadical,
} from '../supabase/api'
import { IRadical, TypedSupabaseClient } from '../types'
import { useToast } from '@/components/ui/use-toast'

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

export const useGetChineseRadicals = (client: TypedSupabaseClient) => {
  return {
    queryKey: [QUERY_KEYS.GETCHINESERADICALS],
    queryFn: () => getChineseRadicals(client),
  }
}
