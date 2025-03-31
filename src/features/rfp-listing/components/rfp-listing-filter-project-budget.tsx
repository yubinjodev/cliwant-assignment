import { Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterProjectBudget() {
  const { projectBudget, handleChangeProjectBudgetAmount, handleChangeProjectIsAmountLimited } =
    useRfpListingFilterStore()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: undefined, md: 'center' }}
      spacing={{ xs: 0, md: 1 }}
    >
      <Typography>사업 금액</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
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
      </Stack>
      <FormControlLabel
        control={<Checkbox onChange={(e) => handleChangeProjectIsAmountLimited(e.target.checked)} />}
        label="금액 제한 없음"
      />
    </Stack>
  )
}
