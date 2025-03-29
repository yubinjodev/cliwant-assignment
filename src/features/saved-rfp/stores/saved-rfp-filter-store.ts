import { create } from 'zustand'
import { SavedRfpFilterStore, SavedRfpFilterStoreActions } from '../types/saved-rfp'
import { SAVED_RFP_FILTER_INITIAL_STATE } from '../utils/constants/saved-rfp-filter-initial-state'

export const useSavedRfpFilterStore = create<SavedRfpFilterStore & SavedRfpFilterStoreActions>((set) => ({
  ...SAVED_RFP_FILTER_INITIAL_STATE,
  handleChangeListingCategory: (category) => set({ listingCategory: category }),
  handleChangeListingSearchInput: (value) => set({ listingSearchInput: value }),
  handleChangeAgencySearchInput: (value) => set({ agencySearchInput: value }),
  handleChangeBusinessCategory: (category) => set({ businessCategory: category }),
  handleChangeAmountRange: (range) => set({ amountRange: range }),
  handleChangeProposalStatus: (status) => set({ proposalStatus: status }),
  handleChangeIsTagFilterOpen: (isOpen) => set({ isTagFilterOpen: isOpen }),
  handleChangeIsMemoDisplayed: () => set((state) => ({ isMemoDisplayed: !state.isMemoDisplayed })),
  reset: () => set(SAVED_RFP_FILTER_INITIAL_STATE),
}))
