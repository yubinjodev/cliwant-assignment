import { RfpListingFilterStore, RfpListingFilterStoreActions } from '@/features/rfp-listing/types/rfp-listing'
import moment from 'moment'
import { create } from 'zustand'
import { RFP_LISTING_FILTER_INITIAL_STATE } from '../utils/constants/rfp-listing-filter-initial-state'

export const useRfpListingFilterStore = create<RfpListingFilterStore & RfpListingFilterStoreActions>((set) => ({
  ...RFP_LISTING_FILTER_INITIAL_STATE,
  handleChangeListingCategory: (category) => set({ listingCategory: category }),
  handleChangeSelectedSavedOption: (option) => set({ selectedSavedOption: option }),
  handleChangeIsReceiveSuggestions: (value) => set({ isReceiveSuggestionsOn: value }),
  handleChangeKeywordCategory: (itemIndex, category) =>
    set((state) => ({
      keywords: state.keywords.map((item, idx) => (idx === itemIndex ? { ...item, category } : item)),
    })),
  handleChangeKeywordCondition: (itemIndex, condition) =>
    set((state) => ({
      keywords: state.keywords.map((item, idx) => (idx === itemIndex ? { ...item, condition } : item)),
    })),
  handleChangeKeywordInput: (itemIndex, value) =>
    set((state) => ({
      keywords: state.keywords.map((item, idx) => (idx === itemIndex ? { ...item, keywordInput: value } : item)),
    })),
  handleChangeAddKeyword: (itemIndex, keyword) =>
    set((state) => ({
      keywords: state.keywords.map((item, idx) =>
        idx === itemIndex ? { ...item, selectedKeywords: [...state.keywords[idx].selectedKeywords, keyword] } : item,
      ),
    })),
  handleChangeRemoveKeyword: (itemIndex, keywordIndex) =>
    set((state) => ({
      keywords: state.keywords.map((item, idx) =>
        idx === itemIndex
          ? {
              ...item,
              selectedKeywords: [...state.keywords[idx].selectedKeywords.filter((_, index) => index !== keywordIndex)],
            }
          : item,
      ),
    })),
  handleChangeExcludeKeywordInput: (key, value) => {
    set((state) => ({
      [key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody']: {
        ...state[key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody'],
        input: value,
      },
    }))
  },
  handleChangeAddExcludeKeyword: (key, value) => {
    set((state) => ({
      [key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody']: {
        ...state[key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody'],
        selectedKeywords: [
          ...state[key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody'].selectedKeywords,
          value,
        ],
      },
    }))
  },
  handleChangeRemoveExcludeKeyword: (key, idx) => {
    set((state) => ({
      [key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody']: {
        ...state[key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody'],
        selectedKeywords: state[key === 'title' ? 'excludeKeywordTitle' : 'excludeKeywordBody'].selectedKeywords.filter(
          (_, itemIdx) => idx !== itemIdx,
        ),
      },
    }))
  },
  handleChangeProjectBudgetAmount: (key, amount) =>
    set((state) => ({
      projectBudget: {
        ...state.projectBudget,
        [key]: amount,
      },
    })),
  handleChangeProjectIsAmountLimited: (isAmountLimited) =>
    set((state) => ({
      projectBudget: {
        ...state.projectBudget,
        isAmountLimited,
      },
    })),
  handleChangeDateCategory: (category) => {
    const calculateStartDate = () => {
      switch (category) {
        case 'day':
          return new Date(moment().subtract(1, 'day').format())
        case 'week':
          return new Date(moment().subtract(1, 'week').format())
        case 'month':
          return new Date(moment().subtract(1, 'month').format())
        case 'year':
          return new Date(moment().subtract(1, 'year').format())
        case 'all':
          return new Date('2020-01-01')
        default:
          return new Date()
      }
    }

    set((state) => ({
      date: {
        ...state.date,
        category,
        startDate: category === 'custom' ? state.date.startDate : calculateStartDate(),
      },
    }))
  },
  handleChangeDate: (key, date) =>
    set((state) => ({
      date: {
        ...state.date,
        [`${key}Date`]: date,
      },
    })),
  handleChangeIsExpiredListingIncluded: (value) =>
    set((state) => ({
      date: {
        ...state.date,
        isExpiredListingIncluded: value,
      },
    })),
  handleChangeBusinessCategory: (category) => set({ businessCategory: category }),
  handleChangeCorporateRestriction: (restriction) => set({ corporateRestriction: restriction }),
  handleChangeSorting: (sorting) => set({ sorting }),
  handleChangeCondition: (condition) =>
    set((state) => (state.condition === condition ? { condition: null } : { condition })),
  handleChangeIsAdvancedSearchOpen: (isOpen) => set({ isAdvancedSearchOpen: isOpen }),
}))
