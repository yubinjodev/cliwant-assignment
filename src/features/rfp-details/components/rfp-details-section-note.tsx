import FeedIcon from '@mui/icons-material/Feed'
import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import RfpDetailsSection from './rfp-details-section'
import { grey } from '@mui/material/colors'

export default function RfpDetailsSectionNote() {
  const [input, setInput] = useState('')

  const handleChangeInput = (value: string) => {
    setInput(value)
  }

  const handleClickSaveMemo = () => {
    toast.success('메모가 저장되었습니다')
  }

  return (
    <RfpDetailsSection icon={<FeedIcon />} title="자격 분석 노트">
      <Stack sx={{ p: 2, height: 240, overflowY: 'auto' }} spacing={1}>
        <TextField value={input} onChange={(e) => handleChangeInput(e.target.value)} multiline rows={6} />
        <Button
          variant="contained"
          onClick={handleClickSaveMemo}
          sx={{
            background: grey[500],
          }}
        >
          저장
        </Button>
      </Stack>
    </RfpDetailsSection>
  )
}
