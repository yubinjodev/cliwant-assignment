import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { RFP_LISTING_FILTER_CONDITION_CATEGORY } from '../utils/constants/rfp-listing-filter-condition-category'

export default function RfpFilterCondition() {
  const { condition, handleChangeCondition } = useRfpListingFilterStore()

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography>조건</Typography>
      {RFP_LISTING_FILTER_CONDITION_CATEGORY.map((item) => (
        <FormControlLabel
          control={<Checkbox checked={item.label === condition} onChange={() => handleChangeCondition(item.label)} />}
          label={item.label}
          key={item.value}
        />
      ))}
    </Stack>
  )
}
