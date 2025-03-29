import { Button, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export default function RfpListingResultsPerPage() {
  const [resultsPerPage, setResultsPerPage] = useState('20')

  const handleChangeResultsPerPage = (value: string) => {
    setResultsPerPage(value)
  }

  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
      <Typography>검과 결과 개수</Typography>
      <Select
        value={resultsPerPage}
        onChange={(e) => handleChangeResultsPerPage(e.target.value)}
        size="small"
        sx={{ background: '#fff', width: 80 }}
      >
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="50">50</MenuItem>
        <MenuItem value="100">100</MenuItem>
        <MenuItem value="200">200</MenuItem>
      </Select>
      <Button variant="contained">저장</Button>
    </Stack>
  )
}
