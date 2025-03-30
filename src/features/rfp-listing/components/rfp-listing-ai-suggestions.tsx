import GradientButton from '@/components/button/gradient-button'
import { List, ListItem, ListItemButton, ListItemText, Paper, Stack, TextField } from '@mui/material'
import { FormEvent, useState } from 'react'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingAiSuggestions() {
  const [input, setInput] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [results, setResults] = useState<string[]>([])

  const { handleChangeAddKeyword, handleChangeKeywordCondition } = useRfpListingFilterStore()

  const handleChangeInput = (value: string) => {
    setInput(value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    setResults([
      '인공지능 OR AI OR 머신러닝 OR 딥러닝 OR 데이터과학 사업 OR 프로젝트 OR 연구 OR 개발 OR 솔루션 자동화 OR 최적화 OR 혁신 OR 기술 OR 플랫폼',
      '인공지능 OR 인공지능기술 OR 알고리즘 OR 데이터분석 OR 기계학습 산업 OR 분야 OR 시장 OR 비즈니스 OR 응용 의료 OR 금융 OR 제조 OR 교육 OR 물류',
      'AI OR 인공지능시스템 OR 인공지능솔루션 OR 인공지능응용 OR 인공지능서비스 스타트업 OR 기업 OR 벤처 OR 조직 OR 파트너십 혁신 OR 성과 OR 성장 OR 경쟁력 OR 차별화',
    ])
  }

  const handleClickKeywordSet = (value: string) => {
    handleChangeKeywordCondition(0, 'or')
    const keywordSet = value.split(' ').filter((item) => item !== ' ' && item !== 'OR')
    keywordSet.forEach((word) => {
      handleChangeAddKeyword(0, word)
    })
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3, width: '100%' }}>
      <Stack component="form" direction="row" alignItems="center" spacing={1} onSubmit={handleFormSubmit}>
        <TextField
          placeholder="찾으시는 사업을 자세하게 설명해주세요"
          size="small"
          value={input}
          onChange={(e) => handleChangeInput(e.target.value)}
          fullWidth
        />
        <GradientButton type="submit">AI 추천</GradientButton>
      </Stack>
      <List>
        {isFormSubmitted && results && results.length
          ? results.map((res) => (
              <ListItem key={res}>
                <ListItemButton onClick={() => handleClickKeywordSet(res)}>
                  <ListItemText primary={res} />
                </ListItemButton>
              </ListItem>
            ))
          : null}
      </List>
    </Paper>
  )
}
