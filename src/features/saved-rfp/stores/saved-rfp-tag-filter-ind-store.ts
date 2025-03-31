import { create } from 'zustand'
import { SavedRfpTagFilterIndStore, SavedRfpTagFilterIndStoreActions } from '../types/saved-rfp'

export const useSavedRfpTagFilterIndStore = create<SavedRfpTagFilterIndStore & SavedRfpTagFilterIndStoreActions>(
  (set) => ({
    appliedTags: [],
    notes: '',
    applyTag: (tag) => set((state) => ({ appliedTags: [...state.appliedTags, tag] })),
    removeAppliedTag: (id) => set((state) => ({ appliedTags: state.appliedTags.filter((_, idx) => id !== idx) })),
    removeAppliedTagByName: (name) =>
      set((state) => ({ appliedTags: state.appliedTags.filter((tag) => tag.label !== name) })),
    resetAppliedTag: () => set({ appliedTags: [] }),
    saveNotes: (notes: string) => set({ notes }),
  }),
)
