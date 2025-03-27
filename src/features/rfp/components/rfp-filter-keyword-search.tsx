import AddIcon from '@mui/icons-material/Add'
import { Button, Chip, MenuItem, Select, Stack, TextField } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { RfpFilterKeywordSearchProps } from '../types/rfp-listing'

export default function RfpFilterKeywordSearch(props: RfpFilterKeywordSearchProps & { idx: number }) {
  const { category, condition, keywordInput, selectedKeywords, idx } = props

  const {
    handleChangeKeywordCategory,
    handleChangeKeywordCondition,
    handleChangeKeywordInput,
    handleChangeAddKeyword,
    handleChangeRemoveKeyword,
  } = useRfpListingFilterStore()

  const handleClickAddNewKeyword = () => {
    handleChangeAddKeyword(idx, keywordInput)
    handleChangeKeywordInput(idx, '')
  }

  return (
    <Stack direction="row" spacing={1}>
      <Select value={category} onChange={(e) => handleChangeKeywordCategory(idx, e.target.value)} sx={{ width: 160 }}>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select value={condition} onChange={(e) => handleChangeKeywordCondition(idx, e.target.value)} sx={{ width: 84 }}>
        <MenuItem value="and">AND</MenuItem>
        <MenuItem value="or">OR</MenuItem>
      </Select>
      <TextField
        placeholder="키워드를 입력해보세요"
        value={keywordInput}
        onChange={(e) => handleChangeKeywordInput(idx, e.target.value)}
      />
      <Button variant="contained" onClick={handleClickAddNewKeyword}>
        <AddIcon />
      </Button>
      {selectedKeywords.map((keyword, keywordIdx) => (
        <Chip
          key={`selectedKeywords${keywordIdx}`}
          label={keyword}
          onDelete={() => handleChangeRemoveKeyword(idx, keywordIdx)}
        />
      ))}
    </Stack>
  )
}
