import { create } from 'zustand'
import { RfpListingTableColumnStore, RfpListingTableColumnStoreActions } from '../types/rfp-listing'
import { RFP_LISTING_TABLE_COLUMN_INITIAL_STATE } from '../utils/constants/rfp-listing-table-column-initial-state'

export const useRfpListingTableColumnStore = create<RfpListingTableColumnStore & RfpListingTableColumnStoreActions>(
  (set, get) => ({
    columns: RFP_LISTING_TABLE_COLUMN_INITIAL_STATE,
    isColumnsAltered: false,
    handleChangeActiveColumns: (id: string) => {
      set((state) => ({ columns: state.columns.filter((item) => item.value !== id) }))

      const { isColumnsAltered } = get()
      if (!isColumnsAltered) set({ isColumnsAltered: true })
    },
    reset: () => set({ columns: RFP_LISTING_TABLE_COLUMN_INITIAL_STATE, isColumnsAltered: false }),
  }),
)
