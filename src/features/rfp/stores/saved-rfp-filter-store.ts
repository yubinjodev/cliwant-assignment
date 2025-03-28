import { create } from 'zustand'
import { SavedRfpFilterStore, SavedRfpFilterStoreActions } from '../types/saved-rfp'

const initialState: SavedRfpFilterStore = {
  listingCategory: 'none',
  listingSearchInput: '',
  agencySearchInput: '',
  businessCategory: 'none',
  amountRange: 'none',
  proposalStatus: 'none',
  admin: 'none',
  isTagFilterOpen: false,
  isMemoDisplayed: false,
}

export const useSavedRfpFilterStore = create<SavedRfpFilterStore & SavedRfpFilterStoreActions>((set) => ({
  ...initialState,
  handleChangeListingCategory: (category) => set({ listingCategory: category }),
  handleChangeListingSearchInput: (value) => set({ listingSearchInput: value }),
  handleChangeAgencySearchInput: (value) => set({ agencySearchInput: value }),
  handleChangeBusinessCategory: (category) => set({ businessCategory: category }),
  handleChangeAmountRange: (range) => set({ amountRange: range }),
  handleChangeProposalStatus: (status) => set({ proposalStatus: status }),
  handleChangeAdmin: (admin) => set({ admin }),
  handleChangeIsTagFilterOpen: (isOpen) => set({ isTagFilterOpen: isOpen }),
  handleChangeIsMemoDisplayed: () => set((state) => ({ isMemoDisplayed: !state.isMemoDisplayed })),
  reset: () => set(initialState),
}))
