import RefreshIcon from '@mui/icons-material/Refresh'
import { Button, Checkbox, FormControlLabel, IconButton, Stack, TextField } from '@mui/material'
import { useSavedRfpFilterStore } from '../stores/saved-rfp-filter-store'
import { SAVED_RFP_FILTER_AMOUNT_CATEGORY } from '../utils/constants/saved-rfp-filter-amount-category'
import { SAVED_RFP_FILTER_BUSINESS_CATEGORY } from '../utils/constants/saved-rfp-filter-business-category'
import { SAVED_RFP_FILTER_LISTING_CATEGORY } from '../utils/constants/saved-rfp-filter-listing-category'
import { SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY } from '../utils/constants/saved-rfp-filter-proposal-status-category'
import SavedRfpDropdown from './saved-rfp-dropdown'
import SavedRfpTableTagFilterDialog from './saved-rfp-table-tag-filter-dialog'

export default function SavedRfpFilters() {
  const {
    listingCategory,
    listingSearchInput,
    agencySearchInput,
    businessCategory,
    amountRange,
    proposalStatus,
    isMemoDisplayed,
    isTagFilterOpen,
    handleChangeListingCategory,
    handleChangeListingSearchInput,
    handleChangeAgencySearchInput,
    handleChangeBusinessCategory,
    handleChangeAmountRange,
    handleChangeProposalStatus,
    handleChangeIsTagFilterOpen,
    handleChangeIsMemoDisplayed,
    reset,
  } = useSavedRfpFilterStore()

  return (
    <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between">
      <SavedRfpTableTagFilterDialog open={isTagFilterOpen} onClose={() => handleChangeIsTagFilterOpen(false)} />

      <Stack spacing={2} direction="row" alignItems="center">
        <SavedRfpDropdown
          state={listingCategory}
          handleChangeCategory={handleChangeListingCategory}
          category={SAVED_RFP_FILTER_LISTING_CATEGORY}
        />

        <TextField
          size="small"
          placeholder="공고명 검색"
          value={listingSearchInput}
          onChange={(e) => handleChangeListingSearchInput(e.target.value)}
          sx={{ width: 100 }}
        />
        <TextField
          size="small"
          placeholder="기관 검색"
          value={agencySearchInput}
          onChange={(e) => handleChangeAgencySearchInput(e.target.value)}
          sx={{ width: 100 }}
        />

        <SavedRfpDropdown
          state={businessCategory}
          handleChangeCategory={handleChangeBusinessCategory}
          category={SAVED_RFP_FILTER_BUSINESS_CATEGORY}
        />

        <SavedRfpDropdown
          state={amountRange}
          handleChangeCategory={handleChangeAmountRange}
          category={SAVED_RFP_FILTER_AMOUNT_CATEGORY}
          sx={{ width: 100 }}
        />

        <SavedRfpDropdown
          state={proposalStatus}
          handleChangeCategory={handleChangeProposalStatus}
          category={SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY}
          sx={{ width: 120 }}
        />

        <SavedRfpDropdown state="none" category={[{ value: 'none', label: '담당자' }]} sx={{ width: 100 }} />

        <Button variant="contained" onClick={() => handleChangeIsTagFilterOpen(true)}>
          태그 필터
        </Button>

        <FormControlLabel
          control={<Checkbox onChange={handleChangeIsMemoDisplayed} checked={isMemoDisplayed} />}
          label="메모 표시"
        />
      </Stack>
      <IconButton onClick={reset}>
        <RefreshIcon />
      </IconButton>
    </Stack>
  )
}
