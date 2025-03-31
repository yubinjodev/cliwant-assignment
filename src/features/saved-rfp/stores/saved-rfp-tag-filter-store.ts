import { create } from 'zustand'
import { SavedRfpTagFilterStore, SavedRfpTagFilterStoreActions } from '../types/saved-rfp'

export const useSavedRfpTagFilterStore = create<SavedRfpTagFilterStore & SavedRfpTagFilterStoreActions>((set, get) => ({
  tags: [
    {
      color: '#eb4034',
      label: 'test',
    },
    {
      color: '#eeeeee',
      label: 'asdf',
    },
  ],
  appliedTagsId: [],
  selectedTag: null,
  selectedTagId: null,

  createNewTag: (tag) => set((state) => ({ tags: [...state.tags, { color: '#eeeeee', label: tag }] })),
  editTagName: (id, newName) =>
    set((state) => ({
      tags: state.tags.map((tag, idx) => (idx === id ? { color: tag.color, label: newName } : tag)),
    })),
  editTagColor: (id, newColor) =>
    set((state) => ({
      tags: state.tags.map((tag, idx) => (idx === id ? { color: newColor, label: tag.label } : tag)),
    })),
  deleteTag: (id) => set((state) => ({ tags: state.tags.filter((_, idx) => id !== idx) })),
  selectTag: (id) => {
    set((state) => ({
      selectedTag: state.tags.find((_, idx) => idx === id),
      selectedTagId: id,
    }))
  },
  removeSelectedTag: () => set({ selectedTag: null }),

  applyTag: (id) => set((state) => ({ appliedTagsId: [...state.appliedTagsId, id] })),
  removeAppliedTag: (id) => set((state) => ({ appliedTagsId: state.appliedTagsId.filter((tag) => tag !== id) })),
  resetAppliedTags: () => set({ appliedTagsId: [] }),
  getAppliedTags: () => {
    const { appliedTagsId } = get()
    const { tags } = get()

    return tags.filter((_, idx) => appliedTagsId.includes(idx))
  },
}))
