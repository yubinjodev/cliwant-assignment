import RefreshIcon from '@mui/icons-material/Refresh'
import { Button, MenuItem, Select, Stack, TextField } from '@mui/material'

export default function SavedRfpFilter() {
  return (
    <Stack spacing={2} sx={{ p: 2 }} direction="row" alignItems="center">
      <Select>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>

      <TextField placeholder="공고명 검색" />
      <TextField placeholder="기관 검색" />

      <Select>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>
      <Select>
        <MenuItem value="title">공고 제목</MenuItem>
        <MenuItem value="body">첨부파일 본문</MenuItem>
      </Select>

      <Button>태그 필터</Button>

      <Button>
        <RefreshIcon />
      </Button>
    </Stack>
  )
}
