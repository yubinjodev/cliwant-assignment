'use client'

import ShareIcon from '@mui/icons-material/Share'
import StarIcon from '@mui/icons-material/Star'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import InfoIcon from '@mui/icons-material/Info'
import { Button, Stack, Typography } from '@mui/material'
import RfpDetailsViewTabs from './rfp-details-view-tabs'
import RfpDetailsSection from './rfp-details-section'

export default function RfpListingDetails() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        뒤로가기
      </Button>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>[서울] 2025년 도시제조업 작업환경개선 지원사업 공고</Typography>
        <Button startIcon={<StarIcon />}>관심 공고 추가</Button>
        <Button startIcon={<ShareIcon />}>공유하기</Button>
      </Stack>

      <RfpDetailsViewTabs />

      {/* todo separate component */}
      <RfpDetailsSection icon={<InfoIcon />} title="프로젝트 정보">
        hello
      </RfpDetailsSection>

      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <RfpDetailsSection icon={<InfoIcon />} title="공동수급 ・ 지역제한 ・ 선정방식">
          hello
        </RfpDetailsSection>
        <RfpDetailsSection icon={<InfoIcon />} title="업종제한">
          hello
        </RfpDetailsSection>
        <RfpDetailsSection icon={<InfoIcon />} title="직접생산 분석 [제한 기준: 제조물품]">
          hello
        </RfpDetailsSection>
      </Stack>
      <RfpDetailsSection icon={<InfoIcon />} title="입찰참가자격">
        hello
      </RfpDetailsSection>

      <RfpDetailsSection icon={<InfoIcon />} title="AI에 공고 관련 질문하기">
        hello
      </RfpDetailsSection>

      <RfpDetailsSection icon={<InfoIcon />} title="마켓 서치">
        hello
      </RfpDetailsSection>

      <RfpDetailsSection icon={<InfoIcon />} title="첨부파일">
        hello
      </RfpDetailsSection>
    </Stack>
  )
}
