import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, Stack, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionAi() {
  const [askAiInput, setAskAiInput] = useState('')

  const handleChangeAskAiInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAskAiInput(e.target.value)
  }

  return (
    <RfpDetailsSection icon={<AutoAwesomeIcon />} title="AI에 공고 관련 질문하기">
      <Box sx={{ p: 2, overflowY: 'auto' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            value={askAiInput}
            fullWidth
            onChange={handleChangeAskAiInput}
            placeholder="공고에 대한 무엇이든 물어보세요! ex)사업 개요를 요약해줘"
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>
    </RfpDetailsSection>
  )
}
