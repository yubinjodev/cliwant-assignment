import { create } from 'zustand'
import { SavedRfpStore, SavedRfpStoreActions } from '../types/saved-rfp'

export const useSavedRfpStore = create<SavedRfpStore & SavedRfpStoreActions>((set) => ({
  isSaved: true,
  handleChangeSave: () => set({ isSaved: true }),
  handleChangeRemove: () => set({ isSaved: false }),
}))
