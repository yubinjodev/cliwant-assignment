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
      set((state) => {
        const isAgencySelected = state.selectedAgencies.includes(agency)
        const updatedSelectedAgencies = isAgencySelected
          ? state.selectedAgencies.filter((a) => a !== agency)
          : [...state.selectedAgencies, agency]

        const isAllAgenciesSelected =
          updatedSelectedAgencies.length === RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY.length
        const isAllUnisSelected = state.selectedUnis.length === RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY.length

        return {
          selectedAgencies: updatedSelectedAgencies,
          showAllChannels: isAllAgenciesSelected && isAllUnisSelected,
          showAllAgencies: isAllAgenciesSelected,
        }
      }),

    handleClickUni: (uni) =>
      set((state) => {
        const isUniSelected = state.selectedUnis.includes(uni)
        const updatedSelectedUnis = isUniSelected
          ? state.selectedUnis.filter((u) => u !== uni)
          : [...state.selectedUnis, uni]

        const isAllUnisSelected = updatedSelectedUnis.length === RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY.length
        const isAllAgenciesSelected =
          state.selectedAgencies.length === RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY.length

        return {
          selectedUnis: updatedSelectedUnis,
          showAllChannels: isAllUnisSelected && isAllAgenciesSelected,
          showAllUnis: isAllUnisSelected,
        }
      }),

    removeAllChannels: () => set({ showAllChannels: false }),
    removeAllAgencies: () => set({ selectedAgencies: [], showAllAgencies: false }),
    removeAllUnis: () => set({ selectedUnis: [], showAllUnis: false }),

    selectAllChannels: () => set({ showAllChannels: true, showAllAgencies: true, showAllUnis: true }),
    selectAllAgencies: () =>
      set((state) => ({
        selectedAgencies: RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY,
        showAllAgencies: true,
        showAllChannels: state.showAllUnis,
      })),
    selectAllUnis: () =>
      set((state) => ({
        selectedUnis: RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY,
        showAllUnis: true,
        showAllChannels: state.showAllAgencies,
      })),
  }),
)
