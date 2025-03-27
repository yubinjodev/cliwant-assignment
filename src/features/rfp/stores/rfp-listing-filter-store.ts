import { create } from 'zustand'
import { RfpListingFilterStore, RfpListingFilterStoreActions } from '../types/rfp-listing'
import moment from 'moment'

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
    startBudgetAmount: '',
    endBudgetAmount: '',
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
    category: 'week',
    startDate: new Date(moment().subtract(1, 'week').format()),
    endDate: new Date(),
    isExpiredListingIncluded: false,
  },
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
