'use client'

import RfpDetailsSection from '@/features/rfp-listing/components/rfp-details-section'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import InfoIcon from '@mui/icons-material/Info'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import SearchIcon from '@mui/icons-material/Search'
import ShareIcon from '@mui/icons-material/Share'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { Box, Button, Grid2, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import RfpDetailsViewTabs from './rfp-details-view-tabs'

export default function RfpDetails() {
  const [industryRestrictionsFilter, setIndustryRestrictionsFilter] = useState('current-listing')
  const [productionAnalysisFilter, setProductionAnalysisFilter] = useState('current-listing')
  const [askAiInput, setAskAiInput] = useState('')

  const router = useRouter()

  const handleChangeFilter = (key: 'industryRestrictionsFilter' | 'productionAnalysisFilter', value: string) => {
    if (key === 'industryRestrictionsFilter') {
      setIndustryRestrictionsFilter(value)
    } else {
      setProductionAnalysisFilter(value)
    }
  }

  const handleChangeAskAiInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAskAiInput(e.target.value)
  }

  return (
    <Stack spacing={2} alignItems="flex-start">
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ background: '#fff' }}
        onClick={() => router.back()}
      >
        뒤로가기
      </Button>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontWeight={700}>[서울] 2025년 도시제조업 작업환경개선 지원사업 공고</Typography>
        <Button startIcon={<StarOutlineIcon />}>관심 공고 추가</Button>
        {/* <Button startIcon={<StarIcon />}>관심 공고 추가</Button> */}
        <Button
          startIcon={<ShareIcon />}
          sx={{
            color: grey[800],
            '& .MuiSvgIcon-root': { color: grey[800] },
            '&:hover': { background: 'unset' },
          }}
        >
          공유하기
        </Button>
      </Stack>

      <RfpDetailsViewTabs />

      {/* todo separate component */}
      <RfpDetailsSection icon={<InfoIcon />} title="프로젝트 정보">
        <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
          <Grid2 container rowSpacing={1}>
            <Grid2 size={1}>
              <Typography>공고 유형</Typography>
            </Grid2>
            <Grid2 size={11}>
              <Typography>용역</Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography>수요 기관</Typography>
            </Grid2>
            <Grid2 size={11}>
              <Typography>기업 마당</Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography>수요 기관</Typography>
            </Grid2>
            <Grid2 size={11}>
              <Typography>-</Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography>시작일</Typography>
            </Grid2>
            <Grid2 size={11}>
              <Typography>2025년 03월 24일</Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography>마감일</Typography>
            </Grid2>
            <Grid2 size={11}>
              <Typography>2025년 03월 24일</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </RfpDetailsSection>

      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <RfpDetailsSection icon={<SquareFootIcon />} title="공동수급 ・ 지역제한 ・ 선정방식">
          <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
            <Grid2 container rowSpacing={1}>
              <Grid2 size={3}>
                <Typography>공동수급</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>공고서 참조</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>지역제한</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>없음</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>제출 방법</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>공고 문서 참조</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>제출 확약서</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>없음</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>기업 제한</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>중소기업(소상공인) 확인서를 요구하므로 대기업은 참여할 수 없습니다.</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>실적 제한</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>해당 입찰 공고에는 실적 제한 조건이 없습니다.</Typography>
              </Grid2>
              <Grid2 size={3}>
                <Typography>인적 제한</Typography>
              </Grid2>
              <Grid2 size={9}>
                <Typography>해당 입찰 공고에는 전문적 인력 조건이 없습니다.</Typography>
              </Grid2>
            </Grid2>
          </Box>
        </RfpDetailsSection>

        <RfpDetailsSection
          icon={<CheckBoxIcon />}
          title="업종제한"
          action={
            <Select
              sx={{ width: 110 }}
              size="small"
              value={industryRestrictionsFilter}
              onChange={(e) => handleChangeFilter('industryRestrictionsFilter', e.target.value)}
            >
              <MenuItem value="current-listing">본 공고</MenuItem>
              <MenuItem value="our-company">우리 회사</MenuItem>
            </Select>
          }
        >
          <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
            <Stack justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
              <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                <Typography>입찰 요구 인증서 (0)</Typography>
                <Typography>충족여부</Typography>
              </Stack>
              <Typography color="success">참여 제한 없음</Typography>
              <Button variant="contained">업종 등록 가이드</Button>
            </Stack>
          </Box>
        </RfpDetailsSection>

        <RfpDetailsSection
          icon={<FindInPageIcon />}
          title="직접생산 분석 [제한 기준: 제조물품]"
          action={
            <Select
              sx={{ width: 110 }}
              size="small"
              value={productionAnalysisFilter}
              onChange={(e) => handleChangeFilter('productionAnalysisFilter', e.target.value)}
            >
              <MenuItem value="current-listing">본 공고</MenuItem>
              <MenuItem value="our-company">우리 회사</MenuItem>
            </Select>
          }
        >
          <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
            <Stack justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
              <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                <Typography>입찰 요구 직접생산 (0)</Typography>
                <Typography>충족여부</Typography>
              </Stack>
              <Typography color="success">참여 제한 없음</Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">직접생상 절차</Button>
                <Button variant="contained">상세 요건</Button>
              </Stack>
            </Stack>
          </Box>
        </RfpDetailsSection>
      </Stack>
      <RfpDetailsSection icon={<WorkspacePremiumIcon />} title="입찰참가자격">
        <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
          <Typography>
            지원대상 선정 (5월) ※ 시 보조금관리위원회 개최 자치구 전문 컨설팅기관 서울시 환경개선 공사시행 (5월~11월)
            준공검사 (5월~11월) 지원금 지급 (~12월) 지원업체 전문 컨설팅기관 자치구 8. 사업신청 가. 접수기간 : 2025. 3.
            20. (목) ~ 4. 17.(목) 나. 접 수 처 : 사업장 관할 자치구 담당부서(붙임2) 다. 제출서류 지원사업 신청서
            개인정보동의서, 사업자등록증 중소기업(소상공인) 확인서 국세-지방세 완납증명서 구매 또는 시공을 희망하는
            물품-설비의 견적서 및 비교견적서 등 ※ 자치구별 접수기간, 제출서류 등이 다를 수 있으므로 자세한 사항은 구청
            담당부서(붙임2)에 문의 라. 신청서류 발급처 구 분 서 류 명 발 급 처 사업자 등록 확인 ㅇ 사업자등록증 o 국세청
            홈택스( 126) ( www.hometax.go.kr h) 소공인 확인서류 ㅇ 중소기업(소상공인) 확인서 * 신청일 기준 기간유효 *
            소상공인 명시 o 중소기업현황정보시스템 ( http://sminfo.smba.go.kr) h ( 1357) 세금 체납확인 ㅇ 국세
            납세증명서 + 지방세 납세증명서 * 단, 신청일로부터 1개월 이내 발급분 o 국세: 국세청 홈택스 (
            www.hometax.go.kr h) o 지방세: 정부24 (http://www.gov.kr) 상시근로자 수 확인 ㅇ 4대 사회보험 가입자 명부 *
            4대보험 가입자 명부에 나와 있는 근로자 수 확인 o 4대 사회보험정보연계센터 (www.4insure.or.kr) 9. 사후관리 및
            보조금 환수 가. 지원받은 사업장 대상으로 물품 및 설비 운영 조사를 할 수 있음 나. 다음 각 호의 어느 하나에
            해당하는 경우 보조금 지급 결정을 취소하고, 이미 지급한 보조금 전액을 환수 1. 보조금의 목적과 다른 용도에
            사용한 경우 2. 거짓 신청이나 그 밖의 부정한 방법으로 보조금을 교부받은 경우 3, 보조금을 지급받기 위한 요건을
            갖추지 못한 것으로 밝혀진 경우 4. 지원받은 물품, 장비 등을 제공 및 판매한 경우 5. 지원 대상자가 물품 구매,
            설비 설치를 대가로 현물, 현금 등을 제공받거나 자부담금 대납, 부가세 지원 등을 받은 경우 6. 그 밖에 구청장이
            보조금 지급 결정을 취소하고 보조금을 환수할 수 있다고 인정하는 경우 다. 폐업, 다른 시도 이전 등으로 지원받은
            물품 설비를 사용하지 않게 된 경우 다음과 같이 사용기간에 따라 보조금 환수 사용기간 보조금 환수율 3개월 미만
            80% 3개월 이상 6개월 미만 70% 6개월 이상 12개월 미만 60% 12개월 이상 18개월 미만 50% 18개월 이상 24개월 미만
            40% 24개월 이상 30개월 미만 30% 30개월 이상 36개월 미만 20% 1. 사용기간은 지원업체 보조금 지급일, 세무서
            등에 제출한 폐업 신고일 또는 폐업 확인일, 사업자등록증 상 소재지 변경일, 보조금 환수 사유 적발일(현장점검일)
            등을 기준으로 산정 2. 월 수 산정 이후 잔여 일자가 15일 이상인 경우에는 1개월을 더함 라. 홍수, 태풍, 화재 등
            재난에 의해 사업장 운영이 불가능한 경우 보조금 환수의 예외로 함 10. 문 의 : 서울시 뷰티패션산업과(
            2133-8786) 및 자치구 담당부서 붙임 1. 지원품목 현황 1부. 2. 자치구 담당부서 현황 1부. 3. 신청서 1부. 4.
            개인정보 제공 동의서 1부. 5. 준공검사원 1부. 6. 보조금 신청서 1부. 끝. 붙임 1 지원품목 현황 ㅇ
            지원품목(35개) : 기본환경(위해요소, 근무환경) 개선 품목 우선 지원 - 필수설비(소화기, 화재감지기, 누전차단기,
            배선함) 우선 지원 지 원 항 목(예시) 비 고 분 야 개선품목 용도 및 효과 기 본 환 경 개 선 (26개)
          </Typography>
        </Box>
      </RfpDetailsSection>

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

      <RfpDetailsSection
        icon={<SavedSearchIcon />}
        title="마켓 서치"
        action={
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(120deg, rgba(255,0,189,1) 0%, rgba(89,0,255,1) 80%)' }}
            startIcon={<AutoFixHighIcon />}
          >
            AI 서치
          </Button>
        }
      >
        <Stack sx={{ p: 3, overflowY: 'auto' }} justifyContent="center" alignItems="center">
          <Typography fontWeight={700} fontStyle={{ color: grey[500] }}>
            AI 서치를 클릭해보세요
          </Typography>
        </Stack>
      </RfpDetailsSection>

      <RfpDetailsSection icon={<AttachFileIcon />} title="첨부파일">
        <Box sx={{ p: 2, overflowY: 'auto' }}>
          <Link href="/">2025년 도시제조업 작업환경개선 지원사업 공고문.hwp</Link>
        </Box>
      </RfpDetailsSection>
    </Stack>
  )
}
