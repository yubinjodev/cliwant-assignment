import AddIcon from '@mui/icons-material/Add'
import { Button, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { RfpFilterKeywordSearchType } from '../types/rfp-listing'

export default function RfpFilterKeywordSearch() {
  const [filter, setFilter] = useState<RfpFilterKeywordSearchType>({
    category: 'title',
    condition: 'or',
  })

  const handleChangeFilter = (e: SelectChangeEvent, key: keyof typeof filter) => {
    setFilter((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  return (
    <Stack direction="row" spacing={1}>
      <Select value={filter.category} onChange={(e) => handleChangeFilter(e, 'category')} sx={{ width: 160 }}>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select value={filter.condition} onChange={(e) => handleChangeFilter(e, 'condition')} sx={{ width: 84 }}>
        <MenuItem value="and">AND</MenuItem>
        <MenuItem value="or">OR</MenuItem>
      </Select>
      <TextField placeholder="키워드를 입력해보세요" />
      <Button variant="contained">
        <AddIcon />
      </Button>
    </Stack>
  )
}
