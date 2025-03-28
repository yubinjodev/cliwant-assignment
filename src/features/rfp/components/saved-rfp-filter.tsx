import RefreshIcon from '@mui/icons-material/Refresh'
import { Button, Checkbox, FormControlLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { useSavedRfpFilterStore } from '../stores/saved-rfp-filter-store'
import { SAVED_RFP_FILTER_AMOUNT_CATEGORY } from '../utils/constants/saved-rfp-filter-amount-category'
import { SAVED_RFP_FILTER_BUSINESS_CATEGORY } from '../utils/constants/saved-rfp-filter-business-category'
import { SAVED_RFP_FILTER_LISTING_CATEGORY } from '../utils/constants/saved-rfp-filter-listing-category'
import { SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY } from '../utils/constants/saved-rfp-filter-proposal-status-category'

export default function SavedRfpFilter() {
  const {
    listingCategory,
    listingSearchInput,
    agencySearchInput,
    businessCategory,
    amountRange,
    proposalStatus,
    admin,
    isTagFilterOpen,
    isMemoDisplayed,
    handleChangeListingCategory,
    handleChangeListingSearchInput,
    handleChangeAgencySearchInput,
    handleChangeBusinessCategory,
    handleChangeAmountRange,
    handleChangeProposalStatus,
    handleChangeAdmin,
    handleChangeIsTagFilterOpen,
    handleChangeIsMemoDisplayed,
  } = useSavedRfpFilterStore()

  return (
    <Stack spacing={2} sx={{ p: 2 }} direction="row" alignItems="center">
      <Select value={listingCategory} onChange={(e) => handleChangeListingCategory(e.target.value)}>
        {SAVED_RFP_FILTER_LISTING_CATEGORY.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>

      <TextField
        placeholder="공고명 검색"
        value={listingSearchInput}
        onChange={(e) => handleChangeListingSearchInput(e.target.value)}
      />
      <TextField
        placeholder="기관 검색"
        value={agencySearchInput}
        onChange={(e) => handleChangeAgencySearchInput(e.target.value)}
      />

      <Select value={businessCategory} onChange={(e) => handleChangeBusinessCategory(e.target.value)}>
        {SAVED_RFP_FILTER_BUSINESS_CATEGORY.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>

      <Select value={amountRange} onChange={(e) => handleChangeAmountRange(e.target.value)}>
        {SAVED_RFP_FILTER_AMOUNT_CATEGORY.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>

      <Select value={proposalStatus} onChange={(e) => handleChangeProposalStatus(e.target.value)}>
        {SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>

      <Select value={admin} onChange={(e) => handleChangeAdmin(e.target.value)}>
        <MenuItem value="none">담당자</MenuItem>
        <MenuItem value="current-user">과제 클라이원트 (test@cliwant.io)</MenuItem>
      </Select>

      <Button onClick={() => handleChangeIsTagFilterOpen(true)}>태그 필터</Button>

      <FormControlLabel
        control={<Checkbox onChange={handleChangeIsMemoDisplayed} checked={isMemoDisplayed} />}
        label="메모 표시"
      />

      <Button>
        <RefreshIcon />
      </Button>
    </Stack>
  )
}
