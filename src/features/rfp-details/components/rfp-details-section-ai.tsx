import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import RfpDetailsSection from './rfp-details-section'
import { toast } from 'react-toastify'

export default function RfpDetailsSectionAi() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState<string[]>([])

  const handleChangeAskAiInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setChatLog((prev) => [...prev, input])
    setInput('')
  }

  useEffect(() => {
    if (chatLog && chatLog.length && containerRef.current) {
      containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [chatLog])

  return (
    <RfpDetailsSection
      icon={<AutoAwesomeIcon />}
      title="AI에 공고 관련 질문하기"
      action={
        chatLog && chatLog.length ? (
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={() => toast.success('프로젝트 히스토리 페이지에 저장되었습니다')}>
              전체 답변 저장
            </Button>
            <Button variant="contained" onClick={() => toast.success('프로젝트 히스토리 페이지에 저장되었습니다')}>
              이번 답변 저장
            </Button>
          </Stack>
        ) : undefined
      }
    >
      <Stack sx={{ p: 2 }} spacing={2}>
        <Box sx={{ maxHeight: 300, overflowY: 'auto' }} ref={containerRef}>
          {chatLog && chatLog.length
            ? chatLog.map((chat, idx) => (
                <Stack key={idx} spacing={1}>
                  <Box
                    sx={{
                      alignSelf: 'flex-end',
                      p: 2,
                      borderRadius: 2,
                      border: `1px solid ${grey[200]}`,
                      width: 'fit-content',
                      maxWidth: '60%',
                    }}
                  >
                    <Typography>{chat}</Typography>
                  </Box>
                  <Box
                    sx={{
                      alignSelf: 'flex-start',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: grey[900],
                      color: '#fff',
                      width: 'fit-content',
                      maxWidth: '60%',
                    }}
                  >
                    <Typography>
                      * 지원방법: 온라인 방문 접수 * 신청기간: 2025년 3월 20일(목) ~ 4월 2일(수) 18:00까지 * 접수처:
                      http www smtech or kr region rms (온라인 접수 시 유의사항 설명 참고) * 제출서류: 신청서,
                      사업계획서(각 신청 프로그램별), 지역특화 프로젝트 레전드 50 참여기업 선정확인서, 우대사항 가점
                      증빙서류 (필요시) * 지원절차 * 지원기업 모집 공고 * 신청 접수 * 선정 평가 * 협약 체결 * 프로그램
                      지원 수행
                    </Typography>
                  </Box>
                </Stack>
              ))
            : null}
        </Box>

        <Stack component="form" direction="row" spacing={2} alignItems="center" onSubmit={handleFormSubmit}>
          <TextField
            value={input}
            fullWidth
            onChange={handleChangeAskAiInput}
            placeholder="공고에 대한 무엇이든 물어보세요! ex)사업 개요를 요약해줘"
          />
          <IconButton
            type="submit"
            sx={{
              background: input ? 'linear-gradient(120deg, rgba(255,0,189,1) 0%, rgba(89,0,255,1) 80%)' : undefined,
              color: input ? '#fff' : undefined,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Stack>
      </Stack>
    </RfpDetailsSection>
  )
}
