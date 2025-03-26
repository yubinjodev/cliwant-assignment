import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, Paper, Stack } from '@mui/material'
import RfpFilterCondition from './rfp-filter-condition'
import RfpFilterKeywordSearch from './rfp-filter-keyword-search'

export default function RfpFilters() {
  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3 }}>
      <Stack component="form" spacing={2}>
        <RfpFilterKeywordSearch />
        <RfpFilterKeywordSearch />
        <RfpFilterKeywordSearch />
        <RfpFilterKeywordSearch />
        <RfpFilterKeywordSearch />
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
