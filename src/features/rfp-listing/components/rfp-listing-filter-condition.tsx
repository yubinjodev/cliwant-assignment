import { Checkbox, FormControlLabel, Grid2, Stack, Typography } from '@mui/material'
import { RFP_LISTING_FILTER_CONDITION_CATEGORY } from '../utils/constants/rfp-listing-filter-condition-category'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterCondition() {
  const { condition, handleChangeCondition } = useRfpListingFilterStore()

  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={{ xs: 0, sm: 2 }}
      alignItems={{ xs: undefined, sm: 'center' }}
    >
      <Typography>조건</Typography>
      <Grid2 container>
        {RFP_LISTING_FILTER_CONDITION_CATEGORY.map((item) => (
          <Grid2 key={item.value}>
            <FormControlLabel
              control={
                <Checkbox checked={condition.includes(item.label)} onChange={() => handleChangeCondition(item.label)} />
              }
              label={item.label}
            />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  )
}
