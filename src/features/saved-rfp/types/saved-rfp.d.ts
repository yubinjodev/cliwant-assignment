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

export type SavedRfpFilterTag = {
  color: string
  label: string
}

export type SavedRfpTagFilterStore = {
  tags: SavedRfpFilterTag[]
  appliedTagsId: number[]
  selectedTag: SavedRfpFilterTag | null
  selectedTagId: number | null
}

export type SavedRfpTagFilterStoreActions = {
  createNewTag: (tag: string) => void
  editTagName: (id: number, newName: string) => void
  editTagColor: (id: number, newColor: string) => void
  deleteTag: (id: number) => void
  selectTag: (id: number) => void
  removeSelectedTag: VoidFunction

  applyTag: (id: number) => void
  removeAppliedTag: (id: number) => void
  resetAppliedTags: VoidFunction
  getAppliedTags: () => { color: string | undefined; label: string }[]
}

export type SavedRfpTagFilterIndStore = {
  appliedTags: SavedRfpFilterTag[]
}

export type SavedRfpTagFilterIndStoreActions = {
  applyTag: (tag: SavedRfpFilterTag) => void
  removeAppliedTag: (id: number) => void
  resetAppliedTag: VoidFunction
}
