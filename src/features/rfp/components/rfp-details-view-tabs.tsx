import ArticleIcon from '@mui/icons-material/Article'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CreateIcon from '@mui/icons-material/Create'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import StorageIcon from '@mui/icons-material/Storage'
import WarningIcon from '@mui/icons-material/Warning'
import { Chip, Stack } from '@mui/material'

export default function RfpDetailsViewTabs() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<DoneAllIcon fontSize="small" />} label="공고 상세" />
      <Chip icon={<CreateIcon fontSize="small" />} label="문서 보기" />
      <Chip icon={<WarningIcon fontSize="small" />} label="리스크 분석" />
      <Chip icon={<StorageIcon fontSize="small" />} label="투창 가격 산출" />
      <Chip icon={<ArticleIcon fontSize="small" />} label="공고 원문" />
      <Chip icon={<AutoAwesomeIcon fontSize="small" />} label="Proposal AI" />
    </Stack>
  )
}
