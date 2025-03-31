import { create } from 'zustand'
import { RfpListingTableColumnStore, RfpListingTableColumnStoreActions } from '../types/rfp-listing'
import { RFP_LISTING_TABLE_COLUMN_INITIAL_STATE } from '../utils/constants/rfp-listing-table-column-initial-state'

export const useRfpListingTableColumnStore = create<RfpListingTableColumnStore & RfpListingTableColumnStoreActions>(
  (set) => ({
    columns: RFP_LISTING_TABLE_COLUMN_INITIAL_STATE,
    handleChangeActiveColumns: (newArr) => set({ columns: newArr }),
    reset: () => set({ columns: RFP_LISTING_TABLE_COLUMN_INITIAL_STATE }),
  }),
)
