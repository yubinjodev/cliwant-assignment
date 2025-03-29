import moment from 'moment'
import { RfpListingFilterStore } from '../../types/rfp-listing'

export const RFP_LISTING_FILTER_INITIAL_STATE: RfpListingFilterStore = {
  listingCategory: 'public' as 'public' | 'private',
  selectedSavedOption: null,
  isReceiveSuggestionsOn: false,
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
  excludeKeywordTitle: {
    input: '',
    selectedKeywords: [],
  },
  excludeKeywordBody: {
    input: '',
    selectedKeywords: [],
  },

  projectBudget: {
    startBudgetAmount: '',
    endBudgetAmount: '',
    isAmountLimited: false,
  },

  date: {
    category: 'week',
    startDate: new Date(moment().subtract(1, 'week').format()),
    endDate: new Date(),
    isExpiredListingIncluded: false,
  },
  businessCategory: 'service',
  corporateRestriction: 'all',
  sorting: 'ends-at-asc',
  condition: null,
  isAdvancedSearchOpen: false,
}
