import { SelectProps } from '@mui/material'

export type SavedRfpFilterStore = {
  listingCategory: string
  listingSearchInput: string
  agencySearchInput: string
  businessCategory: string
  amountRange: string
  proposalStatus: string
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
  handleChangeIsTagFilterOpen: (isOpen: boolean) => void
  handleChangeIsMemoDisplayed: VoidFunction
  reset: VoidFunction
}

export type SavedRfpListingFilterProps = SelectProps & {
  state: string
  category: { value: string; label: string }[]
  handleChangeCategory?: (value: string) => void
}

export type SavedRfpStore = {
  isSaved: boolean
}

export type SavedRfpStoreActions = {
  handleChangeSave: VoidFunction
  handleChangeRemove: VoidFunction
}
