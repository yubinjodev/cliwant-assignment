export type SavedRfpFilterStore = {
  listingCategory: string
  listingSearchInput: string
  agencySearchInput: string
  businessCategory: string
  amountRange: string
  proposalStatus: string
  admin: string
  isTagFilterOpen: boolean
  isMemoDisplayed: boolean
}

export type SavedRfpFilterStoreActions = {
  handleChangeListingCategory: (category: string) => void
  handleChangeListingSearchInput: (value: string) => void
  handleChangeAgencySearchInput: (value: string) => void
  handleChangeBusinessCategory: (category: string) => void
  handleChangeAmountRange: (range: string) => void
  handleChangeProposalStatus: (status: string) => void
  handleChangeAdmin: (admin: string) => void
  handleChangeIsTagFilterOpen: (isOpen: boolean) => void
  handleChangeIsMemoDisplayed: (isDisplayed: boolean) => void
}
