import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
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

  const [isCurrentGroupSaved, setIsCurrentGroupSaved] = useState(false)

  const handleClickSaveCurrentCondition = () => {}

  const handleClickPushPin = () => {
    setIsCurrentGroupSaved((prev) => !prev)
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3 }}>
      <Stack component="form" spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label="공유"
            variant={listingCategory === 'public' ? 'filled' : 'outlined'}
            color={listingCategory === 'public' ? 'primary' : undefined}
            onClick={() => handleChangeListingCategory('public')}
          />
          <Chip
            label="개인"
            variant={listingCategory === 'private' ? 'filled' : 'outlined'}
            color={listingCategory === 'private' ? 'primary' : undefined}
            onClick={() => handleChangeListingCategory('private')}
          />

          <IconButton onClick={handleClickPushPin}>
            {isCurrentGroupSaved ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>

          <Select value="0" size="small">
            <MenuItem value="0">그룹을 선택하세요</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleClickSaveCurrentCondition}>
            현재 조건 저장
          </Button>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Stack>

        {keywords
          .filter((_, idx) => (isAdvancedSearchOpen ? true : idx < 3))
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
            color="secondary"
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
