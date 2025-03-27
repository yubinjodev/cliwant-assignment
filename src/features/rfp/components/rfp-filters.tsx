import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpDateFilter from './rfp-date-filter'
import RfpFilterCondition from './rfp-filter-condition'
import RfpFilterExcludeKeyword from './rfp-filter-exclude-keyword'
import RfpFilterKeywordSearch from './rfp-filter-keyword-search'
import RfpListingFilterDropdown from './rfp-listing-filter-dropdown'

export default function RfpFilters() {
  const {
    listingCategory,
    keywords,
    projectBudget,
    isAdvancedSearchOpen,
    handleChangeIsAdvancedSearchOpen,
    handleChangeListingCategory,
    handleChangeProjectBudgetAmount,
    handleChangeProjectIsAmountLimited,
  } = useRfpListingFilterStore()

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

          <Select value="0">
            <MenuItem value="0">그룹을 선택하세요</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleClickSaveCurrentCondition}>
            현재 조건 저장
          </Button>
          <Button>설정</Button>
        </Stack>

        {keywords
          .filter((item, idx) => (isAdvancedSearchOpen ? true : idx < 3))
          .map((keyword, idx) => (
            <RfpFilterKeywordSearch
              key={idx}
              idx={idx}
              category={keyword.category}
              condition={keyword.condition}
              keywordInput={keyword.keywordInput}
              selectedKeywords={keyword.selectedKeywords}
            />
          ))}

        {isAdvancedSearchOpen ? (
          <>
            <RfpFilterExcludeKeyword />

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>사업 금액</Typography>
              <TextField
                placeholder="0"
                value={projectBudget.startBudgetAmount}
                onChange={(e) => handleChangeProjectBudgetAmount('startBudgetAmount', e.target.value)}
              />
              <Typography>~</Typography>
              <TextField
                placeholder="0"
                value={projectBudget.endBudgetAmount}
                onChange={(e) => handleChangeProjectBudgetAmount('endBudgetAmount', e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox onChange={(e) => handleChangeProjectIsAmountLimited(e.target.checked)} />}
                label="금액 제한 없음"
              />
            </Stack>

            <RfpDateFilter />

            <RfpListingFilterDropdown />

            <RfpFilterCondition />
          </>
        ) : null}
        <Stack direction="row" justifyContent="space-between">
          <div />
          <Button
            onClick={() => handleChangeIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
            endIcon={isAdvancedSearchOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          >
            상세 필터 {isAdvancedSearchOpen ? '접기' : '열기'}
          </Button>
          <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
            검색하기
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
