import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, Chip, MenuItem, Paper, Select, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpDateFilter from './rfp-date-filter'
import RfpFilterCondition from './rfp-filter-condition'
import RfpFilterExcludeKeyword from './rfp-filter-exclude-keyword'
import RfpFilterKeywordSearch from './rfp-filter-keyword-search'

export default function RfpFilters() {
  const { listingCategory, keywords, handleChangeListingCategory } = useRfpListingFilterStore()

  const handleClickSaveCurrentCondition = () => {
    console.log('')
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3 }}>
      <Stack component="form" spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label="공유"
            variant={listingCategory === 'public' ? 'filled' : 'outlined'}
            onClick={() => handleChangeListingCategory('public')}
          />
          <Chip
            label="개인"
            variant={listingCategory === 'private' ? 'filled' : 'outlined'}
            onClick={() => handleChangeListingCategory('private')}
          />

          <Select>
            <MenuItem value="all">전체</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleClickSaveCurrentCondition}>
            현재 조건 저장
          </Button>
          <Button>설정</Button>
        </Stack>

        {keywords.map((keyword, idx) => (
          <RfpFilterKeywordSearch
            key={idx}
            idx={idx}
            category={keyword.category}
            condition={keyword.condition}
            keywordInput={keyword.keywordInput}
            selectedKeywords={keyword.selectedKeywords}
          />
        ))}

        <RfpFilterExcludeKeyword />

        <RfpDateFilter />
        <RfpFilterCondition />
        <Box>
          <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
            검색하기
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}
