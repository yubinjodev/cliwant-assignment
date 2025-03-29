import { SavedRfpFilterStore } from '../../types/saved-rfp'

export const SAVED_RFP_FILTER_INITIAL_STATE: SavedRfpFilterStore = {
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
