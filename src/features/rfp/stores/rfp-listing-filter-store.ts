import { create } from 'zustand'
import { RfpListingFilterStore, RfpListingFilterStoreActions } from '../types/rfp-listing'

export const useRfpListingFilterStore = create<RfpListingFilterStore & RfpListingFilterStoreActions>((set) => ({
  listingCategory: 'public' as 'public' | 'private',
  handleChangeListingCategory: (category) => set({ listingCategory: category }),
  selectedSavedOption: null,
  handleChangeSelectedSavedOption: (option) => set({ selectedSavedOption: option }),
  isReceiveSuggestions: false,
  handleChangeIsReceiveSuggestions: (value) => set({ isReceiveSuggestions: value }),

  keywords: [
    {
      category: 'title',
      condition: 'and',
      keywordInput: '',
      selectedKeywords: [],
    },
    {
      category: 'title',
      condition: 'and',
      keywordInput: '',
      selectedKeywords: [],
    },
    {
      category: 'title',
      condition: 'and',
      keywordInput: '',
      selectedKeywords: [],
    },
    {
      category: 'title',
      condition: 'and',
      keywordInput: '',
      selectedKeywords: [],
    },
    {
      category: 'title',
      condition: 'and',
      keywordInput: '',
      selectedKeywords: [],
    },
  ],
  handleChangeKeywordCategory: (itemIndex, category) => {
    console.log(itemIndex)
    console.log(category)
    set((state) => ({
      keywords: state.keywords.map((item, idx) => (idx === itemIndex ? { ...item, category } : item)),
    }))
  },
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

  excludeKeywordTitle: {
    input: '',
    selectedKeywords: [],
  },
  excludeKeywordBody: {
    input: '',
    selectedKeywords: [],
  },
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

  projectBudget: {
    startBudgetAmount: 0,
    endBudgetAmount: 0,
    isAmountLimited: false,
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

  date: {
    category: 'day',
    startDate: null,
    endDate: null,
    isExpiredListingIncluded: false,
  },
  handleChangeDateCategory: (category) =>
    set((state) => ({
      date: {
        ...state.date,
        category,
      },
    })),
  handleChangeDate: (dates) =>
    set((state) => ({
      date: {
        ...state.date,
        startDate: dates[0],
        endDate: dates[1],
      },
    })),
  handleChangeIsExpiredListingIncluded: (value) =>
    set((state) => ({
      date: {
        ...state.date,
        isExpiredListingIncluded: value,
      },
    })),

  businessCategory: 'all',
  handleChangeBusinessCategory: (category) => set({ businessCategory: category }),
  corporateRestriction: 'all',
  handleChangeCorporateRestriction: (restriction) => set({ corporateRestriction: restriction }),
  sorting: 'relevant',
  handleChangeSorting: (sorting) => set({ sorting }),

  condition: null,
  handleChangeCondition: (condition) => set({ condition }),

  isAdvancedSearchOpen: false,
  handleChangeIsAdvancedSearchOpen: (isOpen) => set({ isAdvancedSearchOpen: isOpen }),
}))
