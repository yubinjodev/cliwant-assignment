import { create } from 'zustand'
import { SavedRfpFilterStore, SavedRfpFilterStoreActions } from '../types/saved-rfp'

export const savedRfpFilterStore = create<SavedRfpFilterStore & SavedRfpFilterStoreActions>((set) => ({
  listingCategory: '',
  handleChangeListingCategory: () => set({}),
  listingSearchInput: '',
  handleChangeListingSearchInput: () => set({}),
  agencySearchInput: '',
  handleChangeAgencySearchInput: () => set({}),
  businessCategory: '',
  handleChangeBusinessCategory: () => set({}),
  amountRange: '',
  handleChangeAmountRange: () => set({}),
  proposalStatus: '',
  handleChangeProposalStatus: () => set({}),
  admin: '',
  handleChangeAdmin: () => set({}),
  isTagFilterOpen: false,
  handleChangeIsTagFilterOpen: () => set({}),
  isMemoDisplayed: false,
  handleChangeIsMemoDisplayed: () => set({}),
}))
