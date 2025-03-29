import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Box } from '@mui/material'
import Link from 'next/link'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionAttachedFiles() {
  return (
    <RfpDetailsSection icon={<AttachFileIcon />} title="첨부파일">
      <Box sx={{ p: 2, overflowY: 'auto' }}>
        <Link href="/">2025년 도시제조업 작업환경개선 지원사업 공고문.hwp</Link>
      </Box>
    </RfpDetailsSection>
  )
}
