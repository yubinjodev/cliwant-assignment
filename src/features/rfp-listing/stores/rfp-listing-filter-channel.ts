import { create } from 'zustand'
import { RfpListingFilterChannelStore, RfpListingFilterChannelStoreActions } from '../types/rfp-listing'
import { RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-agency-channel-category'
import { RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-uni-channel-category'

export const useRfpListingFilterChannel = create<RfpListingFilterChannelStore & RfpListingFilterChannelStoreActions>(
  (set) => ({
    selectedAgencies: RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY,
    selectedUnis: RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY,

    showAllChannels: true,
    showAllAgencies: true,
    showAllUnis: true,

    handleClickAgency: (agency) =>
      set((state) => ({
        selectedAgencies: state.selectedAgencies.includes(agency)
          ? state.selectedAgencies.filter((a) => a !== agency)
          : [...state.selectedAgencies, agency],
      })),
    handleClickUni: (uni) =>
      set((state) => ({
        selectedUnis: state.selectedUnis.includes(uni)
          ? state.selectedUnis.filter((u) => u !== uni)
          : [...state.selectedUnis, uni],
      })),

    removeAllChannels: () =>
      set({
        showAllChannels: false,
        showAllAgencies: false,
        showAllUnis: false,
        selectedAgencies: [],
        selectedUnis: [],
      }),
    removeAllAgencies: () => set({ showAllChannels: false, showAllAgencies: false, selectedAgencies: [] }),
    removeAllUnis: () => set({ showAllChannels: false, showAllUnis: false, selectedUnis: [] }),

    selectAllChannels: () =>
      set({
        showAllChannels: true,
        showAllAgencies: true,
        showAllUnis: true,
        selectedAgencies: RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY,
        selectedUnis: RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY,
      }),
    selectAllAgencies: () =>
      set({ showAllAgencies: true, selectedAgencies: RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY }),
    selectAllUnis: () => set({ showAllAgencies: true, selectedUnis: RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY }),
  }),
)
