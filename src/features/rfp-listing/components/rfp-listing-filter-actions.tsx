import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterActions() {
  const { isAdvancedSearchOpen, isChannelOpen, handleChangeIsAdvancedSearchOpen, handleClickIsChannelOpen } =
    useRfpListingFilterStore()

  const handleClickAdvancedSearch = () => {
    if (isAdvancedSearchOpen) {
      handleChangeIsAdvancedSearchOpen(false)
      handleClickIsChannelOpen(false)
    } else {
      handleChangeIsAdvancedSearchOpen(true)
    }
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <div />
      <Button
        onClick={handleClickAdvancedSearch}
        endIcon={isAdvancedSearchOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        color="secondary"
      >
        상세 필터 {isAdvancedSearchOpen ? '접기' : '열기'}
      </Button>
      {isChannelOpen ? (
        <div />
      ) : (
        <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
          검색하기
        </Button>
      )}
    </Stack>
  )
}
