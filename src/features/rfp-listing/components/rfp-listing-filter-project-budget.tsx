import { Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterProjectBudget() {
  const { projectBudget, handleChangeProjectBudgetAmount, handleChangeProjectIsAmountLimited } =
    useRfpListingFilterStore()

  return (
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
  )
}
