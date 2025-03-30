import AddIcon from '@mui/icons-material/Add'
import { Chip, IconButton, MenuItem, Select, Stack, TextField } from '@mui/material'
import { FormEvent } from 'react'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { RfpFilterKeywordSearchProps } from '../types/rfp-listing'

export default function RfpListingFilterKeywordSearch(props: RfpFilterKeywordSearchProps & { idx: number }) {
  const { category, condition, keywordInput, selectedKeywords, idx } = props

  const {
    handleChangeKeywordCategory,
    handleChangeKeywordCondition,
    handleChangeKeywordInput,
    handleChangeAddKeyword,
    handleChangeRemoveKeyword,
  } = useRfpListingFilterStore()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleChangeAddKeyword(idx, keywordInput)
    handleChangeKeywordInput(idx, '')
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center" component="form" onSubmit={handleFormSubmit}>
      <Select
        size="small"
        value={category}
        onChange={(e) => handleChangeKeywordCategory(idx, e.target.value)}
        sx={{ width: 160 }}
      >
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select
        size="small"
        value={condition}
        onChange={(e) => handleChangeKeywordCondition(idx, e.target.value)}
        sx={{ width: 84 }}
      >
        <MenuItem value="and">AND</MenuItem>
        <MenuItem value="or">OR</MenuItem>
      </Select>
      <TextField
        size="small"
        placeholder="키워드를 입력해보세요"
        value={keywordInput}
        onChange={(e) => handleChangeKeywordInput(idx, e.target.value)}
      />
      <IconButton type="submit" disabled={!keywordInput}>
        <AddIcon />
      </IconButton>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%', overflowX: 'auto' }}>
        {selectedKeywords.map((keyword, keywordIdx) => (
          <Chip
            key={`selectedKeywords${keywordIdx}`}
            label={keyword}
            onDelete={() => handleChangeRemoveKeyword(idx, keywordIdx)}
          />
        ))}
      </Stack>
    </Stack>
  )
}
