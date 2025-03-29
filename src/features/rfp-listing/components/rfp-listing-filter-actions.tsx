import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterActions() {
  const { isAdvancedSearchOpen, handleChangeIsAdvancedSearchOpen } = useRfpListingFilterStore()

  return (
    <Stack direction="row" justifyContent="space-between">
      <div />
      <Button
        onClick={() => handleChangeIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
        endIcon={isAdvancedSearchOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        color="secondary"
      >
        상세 필터 {isAdvancedSearchOpen ? '접기' : '열기'}
      </Button>
      <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
        검색하기
      </Button>
    </Stack>
  )
}
