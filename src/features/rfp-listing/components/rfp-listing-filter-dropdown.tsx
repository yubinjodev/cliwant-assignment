import { RFP_LISTING_FILTER_BUSINESS_CATEGORY } from '@/features/rfp-listing/utils/constants/rfp-listing-filter-business-category'
import { RFP_LISTING_FILTER_CORPORATE_RESTRICTIONS_CATEGORY } from '@/features/rfp-listing/utils/constants/rfp-listing-filter-corporate-restrictions-category'
import { RFP_LISTING_FILTER_SORTING_CATEGORY } from '@/features/rfp-listing/utils/constants/rfp-listing-filter-sorting-category'
import { MenuItem, Select, Stack, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterDropdown() {
  const {
    businessCategory,
    corporateRestriction,
    sorting,
    handleChangeBusinessCategory,
    handleChangeCorporateRestriction,
    handleChangeSorting,
  } = useRfpListingFilterStore()

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography sx={{ width: { xs: 'unset', md: 110 } }}>사업 구분</Typography>
        <Select size="small" value={businessCategory} onChange={(e) => handleChangeBusinessCategory(e.target.value)}>
          {RFP_LISTING_FILTER_BUSINESS_CATEGORY.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>기업 제한</Typography>
        <Select
          size="small"
          value={corporateRestriction}
          onChange={(e) => handleChangeCorporateRestriction(e.target.value)}
          sx={{ width: 160 }}
        >
          {RFP_LISTING_FILTER_CORPORATE_RESTRICTIONS_CATEGORY.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>정렬 기준</Typography>
        <Select size="small" value={sorting} onChange={(e) => handleChangeSorting(e.target.value)} sx={{ width: 160 }}>
          {RFP_LISTING_FILTER_SORTING_CATEGORY.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Stack>
  )
}
