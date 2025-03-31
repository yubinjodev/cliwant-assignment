import GradientButton from '@/components/button/gradient-button'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionMarketSearch() {
  const [marketSearchResult, setMarketSearchResult] = useState('')

  const handleClickSave = () => {
    toast.success('프로젝트 히스토리 페이지에 저장되었습니다')
  }

  const handleChangeResult = (e: ChangeEvent<HTMLInputElement>) => {
    setMarketSearchResult(e.target.value)
  }

  const handleClickSearch = () => {
    setMarketSearchResult(
      `충청남도 지역주력산업육성(지역특화 프로젝트 레전드 50+) 지원 모집 사업에 대한 기업마당 및 관련 정보 분석 결과입니다.

기업마당 정보 요약:

* 기업마당은 중소벤처기업부에서 운영하는 중소기업 종합지원 시스템입니다.
* 중앙부처, 지자체, 공공기관 등 560여 개 지원기관의 최신 정책 정보를 제공합니다.
* 지원사업 공고, 품목별 법정 의무 인증 제도, 행사 정보, 정책 뉴스, 입법/행정 예고/고시, 기업 업무용 서식 등 다양한 정보를 제공합니다.
* 모바일 앱(안드로이드 및 iOS)으로도 이용 가능합니다.

최근 추진 사업 이력 및 최근 이슈:s

* 2024년 지역특화 프로젝트 레전드 50+ 지원사업 설명회 개최 (2024년 3월 25일): 중소기업 혁신 바우처, 수출지원기반활용사업, 중소기업 정책자금, 창업중심대학 지원사업, 선도형 스마트공장 구축지원사업 등에 대한 설명이 있었습니다.
* 충남TP는 레전드 50+의 주관기관으로서 천연물 소재 고기능성 그린바이오 기업 생태계 조성 프로젝트를 수행 중이며, 2024년 국비 약 130억 원을 확보했습니다.
* 2024년 11월 28일 ~ 12월 3일 충북테크노파크에서 2025년 지역특화 프로젝트(레전드 50+) 2.0 참여기업 모집 연장 공고가 있었습니다.  융합바이오 및 친환경 모빌리티 분야입니다.
* 2024년 11월 19일 충남테크노파크에서 2025년도 충청남도 지역특화 프로젝트 '레전드 50+' 2.0 참여기업 선정계획 공고가 있었습니다. 탄소저감 자동차부품 및 디스플레이 부품·장비 분야입니다.
* 2024년 11월 20일 ~ 27일 충남테크노파크에서 2025년 지역특화 프로젝트 (레전드 50+) 1.0 참여기업 추가 선정계획 공고(천연물소재)가 있었습니다.
* 다양한 지역(강원, 경기, 경남, 경북, 광주, 대구, 대전, 부산, 서울, 울산, 인천, 전남, 전북, 제주, 충남, 충북 등)에서 2025년 지역주력산업육성(지역특화 프로젝트 레전드 50+) 관련 지원사업 모집 공고가 있었습니다.  지원 대상 및 내용은 지역 및 특화 산업에 따라 다릅니다.


본 사업과 관련한 사전 조사:

주요 키워드:  충청남도, 지역주력산업육성, 지역특화 프로젝트, 레전드 50+, 지원모집, 고기능성 그린바이오, 탄소저감 자동차부품, 디스플레이부품장비, 중소벤처기업부, 충남테크노파크


유관 이슈 분석:

* 정부의 지역경제 활성화 정책:  레전드 50+ 사업은 정부의 지역균형 발전 및 중소기업 육성 정책의 일환입니다.  지역별 특화산업 육성을 통해 지역 경제에 활력을 불어넣고자 하는 정부의 의지가 반영된 사업입니다.
* 미래 산업 육성:  본 사업은 고기능성 그린바이오, 탄소저감 자동차부품, 디스플레이 부품장비 등 미래 유망 산업을 중심으로 지원을 제공합니다.  이는 미래 성장 동력 확보를 위한 국가적 전략과도 맞닿아 있습니다.
* 지역 혁신 생태계 구축:  충남테크노파크와 같은 지역 혁신기관의 역할이 중요하며,  지역 기업과 혁신기관 간의 협력을 통한 시너지 창출이 사업 성공의 중요한 요소입니다.
* 경쟁 심화:  많은 지역에서 유사한 지원사업이 진행되고 있으므로, 충청남도 사업의 경쟁력 확보를 위한 차별화 전략이 중요합니다.


참고:  상기 정보는 2025년 3월 30일 현재까지 수집된 정보를 바탕으로 작성되었습니다.  향후 정책 변경 등으로 내용이 바뀔 수 있습니다.`,
    )
  }

  return (
    <RfpDetailsSection
      icon={<SavedSearchIcon />}
      title="마켓 서치"
      action={<GradientButton onClick={handleClickSearch}>AI 서치</GradientButton>}
    >
      <Stack sx={{ p: 3, overflowY: 'auto' }} justifyContent="center" alignItems="center" spacing={1}>
        {marketSearchResult ? (
          <TextField value={marketSearchResult} onChange={handleChangeResult} multiline fullWidth maxRows={10} />
        ) : (
          <Typography fontWeight={700} fontStyle={{ color: grey[500] }}>
            AI 서치를 클릭해보세요
          </Typography>
        )}
        <Stack alignItems="flex-end" sx={{ width: '100%' }}>
          {marketSearchResult ? (
            <Button onClick={handleClickSave} variant="contained">
              저장
            </Button>
          ) : null}
        </Stack>
      </Stack>
    </RfpDetailsSection>
  )
}
