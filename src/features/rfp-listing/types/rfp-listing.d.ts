import { ReactElement } from 'react'

export type RfpSearchTabsCategories = 'simple' | 'ai' | 'advanced'

export type RfpFilterKeywordSearchType = {
  category: 'title' | 'body'
  condition: 'or' | 'and'
}

export type RfpDateFilterTypeCategory = 'day' | 'week' | 'month' | 'year' | 'all' | 'custom'

export type RfpDateFilterType = {
  category: 'day' | 'week' | 'month' | 'year' | 'all' | 'custom'
  startDate: Date | null
  endDate: Date | null
}

export type RfpListingFilterStore = {
  listingCategory: 'public' | 'private'
  selectedSavedOption: number | null
  isReceiveSuggestionsOn: boolean

  keywords: RfpFilterKeywordSearchProps[]

  excludeKeywordTitle: {
    input: string
    selectedKeywords: string[]
  }
  excludeKeywordBody: {
    input: string
    selectedKeywords: string[]
  }

  projectBudget: {
    startBudgetAmount: string
    endBudgetAmount: string
    isAmountLimited: boolean
  }

  date: {
    category: 'day' | 'week' | 'month' | 'year' | 'all' | 'custom'
    startDate: Date | null
    endDate: Date | null
    isExpiredListingIncluded: boolean
  }

  businessCategory: string
  corporateRestriction: string
  sorting: string

  condition: string | null

  isAdvancedSearchOpen: boolean
}

export type RfpListingFilterStoreActions = {
  handleChangeListingCategory: (category: 'public' | 'private') => void
  handleChangeSelectedSavedOption: (option: number | null) => void
  handleChangeIsReceiveSuggestions: (value: boolean) => void

  handleChangeKeywordCategory: (itemIndex: number, category: SelectChangeEvent<'title' | 'body'>) => void
  handleChangeKeywordCondition: (itemIndex: number, condition: SelectChangeEvent<'or' | 'and'>) => void
  handleChangeKeywordInput: (itemIndex: number, value: string) => void
  handleChangeAddKeyword: (itemIndex: number, keyword: string) => void
  handleChangeRemoveKeyword: (itemIndex: number, keywordIndex: number) => void

  handleChangeExcludeKeywordInput: (key: 'title' | 'body', value: string) => void
  handleChangeAddExcludeKeyword: (key: 'title' | 'body', value: string) => void
  handleChangeRemoveExcludeKeyword: (key: 'title' | 'body', idx: number) => void

  handleChangeProjectBudgetAmount: (key: 'startBudgetAmount' | 'endBudgetAmount', amount: string) => void
  handleChangeProjectIsAmountLimited: (isAmountLimited: boolean) => void

  handleChangeDateCategory: (category: 'day' | 'week' | 'month' | 'year' | 'all' | 'custom') => void
  handleChangeDate: (key: 'start' | 'end', date: Date | null) => void
  handleChangeIsExpiredListingIncluded: (value: boolean) => void

  handleChangeBusinessCategory: (category: string) => void
  handleChangeCorporateRestriction: (restriction: string) => void
  handleChangeSorting: (sorting: string) => void

  handleChangeCondition: (condition: string | null) => void

  handleChangeIsAdvancedSearchOpen: (isOpen: boolean) => void
}

export type RfpFilterKeywordSearchProps = {
  category: 'title' | 'body'
  condition: 'or' | 'and'
  keywordInput: string
  selectedKeywords: string[]
}

export type RfpListingTableColumnStore = {
  columns: { value: string; label: string; data: string | ReactElement }[]
  isColumnsAltered: boolean
}

export type RfpListingTableColumnStoreActions = {
  handleChangeActiveColumns: (id: string) => void
  reset: VoidFunction
}

export type RfpListingFilterChannelStore = {
  selectedAgencies: string[]
  selectedUnis: string[]

  showAllChannels: boolean
  showAllAgencies: boolean
  showAllUnis: boolean
}

export type RfpListingFilterChannelStoreActions = {
  handleClickAgency: (agency: string) => void
  handleClickUni: (uni: string) => void

  removeAllChannels: VoidFunction
  removeAllAgencies: VoidFunction
  removeAllUnis: VoidFunction

  selectAllChannels: VoidFunction
  selectAllAgencies: VoidFunction
  selectAllUnis: VoidFunction
}
