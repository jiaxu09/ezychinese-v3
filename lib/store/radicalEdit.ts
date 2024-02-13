import { create } from 'zustand'

interface ChineseRadicalState {
  edit: boolean
  setEdit: (edit: boolean) => void
}

export const useChineseRadicalEdit = create<ChineseRadicalState>()((set) => ({
  edit: false,
  setEdit: (edit: boolean) => set(() => ({ edit })),
}))
