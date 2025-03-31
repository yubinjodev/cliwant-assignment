import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArticleIcon from '@mui/icons-material/Article'
import CreateIcon from '@mui/icons-material/Create'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import StorageIcon from '@mui/icons-material/Storage'
import WarningIcon from '@mui/icons-material/Warning'
import { Chip, Stack } from '@mui/material'
import { useState } from 'react'

export default function RfpDetailsViewTabs() {
  const [currentViewTab, setCurrentViewTab] = useState('공고 상세')

  const handleChangeCurrentViewTab = (value: string) => {
    setCurrentViewTab(value)
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: '100%',
        overflowX: 'auto',
        '& .MuiChip-root': {
          px: 0.75,
        },
      }}
    >
      <Chip
        color={currentViewTab === '공고 상세' ? 'primary' : undefined}
        icon={<DoneAllIcon fontSize="small" />}
        label="공고 상세"
        onClick={() => handleChangeCurrentViewTab('공고 상세')}
      />
      <Chip
        color={currentViewTab === '문서 보기' ? 'primary' : undefined}
        icon={<CreateIcon fontSize="small" />}
        label="문서 보기"
        onClick={() => handleChangeCurrentViewTab('문서 보기')}
      />
      <Chip
        color={currentViewTab === '리스크 분석' ? 'primary' : undefined}
        icon={<WarningIcon fontSize="small" />}
        label="리스크 분석"
        onClick={() => handleChangeCurrentViewTab('리스크 분석')}
      />
      <Chip
        color={currentViewTab === '투창 가격 산출' ? 'primary' : undefined}
        icon={<StorageIcon fontSize="small" />}
        label="투창 가격 산출"
        onClick={() => handleChangeCurrentViewTab('투창 가격 산출')}
      />
      <Chip
        color={currentViewTab === '공고 원문' ? 'primary' : undefined}
        icon={<ArticleIcon fontSize="small" />}
        label="공고 원문"
        onClick={() => handleChangeCurrentViewTab('공고 원문')}
      />

      <Chip
        color={currentViewTab === 'Proposal AI' ? 'primary' : undefined}
        icon={<AutoAwesomeIcon fontSize="small" />}
        label="Proposal AI (BETA)"
        onClick={() => handleChangeCurrentViewTab('Proposal AI')}
      />
    </Stack>
  )
}
