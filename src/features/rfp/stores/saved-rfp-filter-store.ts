import { create } from 'zustand'
import { SavedRfpFilterStore, SavedRfpFilterStoreActions } from '../types/saved-rfp'

export const useSavedRfpFilterStore = create<SavedRfpFilterStore & SavedRfpFilterStoreActions>((set) => ({
  listingCategory: 'none',
  handleChangeListingCategory: (category) => set({ listingCategory: category }),

  listingSearchInput: '',
  handleChangeListingSearchInput: (value) => set({ listingSearchInput: value }),

  agencySearchInput: '',
  handleChangeAgencySearchInput: (value) => set({ agencySearchInput: value }),

  businessCategory: 'none',
  handleChangeBusinessCategory: (category) => set({ businessCategory: category }),

  amountRange: 'none',
  handleChangeAmountRange: (range) => set({ amountRange: range }),

  proposalStatus: 'none',
  handleChangeProposalStatus: (status) => set({ proposalStatus: status }),

  admin: 'none',
  handleChangeAdmin: (admin) => set({ admin }),

  isTagFilterOpen: false,
  handleChangeIsTagFilterOpen: (isOpen) => set({ isTagFilterOpen: isOpen }),

  isMemoDisplayed: false,
  handleChangeIsMemoDisplayed: () => set((state) => ({ isMemoDisplayed: !state.isMemoDisplayed })),
}))
