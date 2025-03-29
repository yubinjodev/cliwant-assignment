import GradientButton from '@/components/button/gradient-button'
import { Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'

export default function RfpListingAiSuggestions() {
  const [input, setInput] = useState('')

  const handleChangeInput = (value: string) => {
    setInput(value)
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3, width: '100%' }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <TextField
          placeholder="찾으시는 사업을 자세하게 설명해주세요"
          size="small"
          value={input}
          onChange={(e) => handleChangeInput(e.target.value)}
          fullWidth
        />
        <GradientButton>AI 추천</GradientButton>
      </Stack>
    </Paper>
  )
}
