import { Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpListingDateFilter from './rfp-listing-date-filter'
import RfpListingFilterCondition from './rfp-listing-filter-condition'
import RfpListingFilterDropdown from './rfp-listing-filter-dropdown'
import RfpListingFilterExcludeKeyword from './rfp-listing-filter-exclude-keyword'

export default function RfpListingAdvancedFilters() {
  const { projectBudget, handleChangeProjectBudgetAmount, handleChangeProjectIsAmountLimited } =
    useRfpListingFilterStore()

  return (
    <>
      <RfpListingFilterExcludeKeyword />

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>사업 금액</Typography>
        <TextField
          size="small"
          placeholder="0"
          value={projectBudget.startBudgetAmount}
          onChange={(e) => handleChangeProjectBudgetAmount('startBudgetAmount', e.target.value)}
        />
        <Typography>~</Typography>
        <TextField
          size="small"
          placeholder="0"
          value={projectBudget.endBudgetAmount}
          onChange={(e) => handleChangeProjectBudgetAmount('endBudgetAmount', e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox onChange={(e) => handleChangeProjectIsAmountLimited(e.target.checked)} />}
          label="금액 제한 없음"
        />
      </Stack>

      <RfpListingDateFilter />

      <RfpListingFilterDropdown />

      <RfpListingFilterCondition />
    </>
  )
}
