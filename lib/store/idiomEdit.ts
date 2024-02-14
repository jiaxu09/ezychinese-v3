import { create } from 'zustand'

interface ChineseIdiomState {
  edit: boolean
  setEdit: (edit: boolean) => void
}

export const useChineseIdiomEdit = create<ChineseIdiomState>()((set) => ({
  edit: false,
  setEdit: (edit: boolean) => set(() => ({ edit })),
}))
