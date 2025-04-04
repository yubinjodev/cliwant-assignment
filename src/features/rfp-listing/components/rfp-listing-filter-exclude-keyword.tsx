import AddIcon from '@mui/icons-material/Add'
import { Chip, IconButton, Stack, TextField, Typography } from '@mui/material'
import { FormEvent } from 'react'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterExcludeKeyword() {
  const {
    excludeKeywordTitle,
    excludeKeywordBody,
    handleChangeExcludeKeywordInput,
    handleChangeAddExcludeKeyword,
    handleChangeRemoveExcludeKeyword,
  } = useRfpListingFilterStore()

  const handleClickAddNewKeyword = (key: 'title' | 'body') => {
    if (key === 'title') {
      handleChangeAddExcludeKeyword(key, excludeKeywordTitle.input)
    } else {
      handleChangeAddExcludeKeyword(key, excludeKeywordBody.input)
    }
    handleChangeExcludeKeywordInput(key, '')
  }

  const handleSubmitTitleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const titleKeyword = excludeKeywordTitle.selectedKeywords.some((word) => word === excludeKeywordTitle.input)
    const bodyKeyword = excludeKeywordBody.selectedKeywords.some((word) => word === excludeKeywordTitle.input)
    if (!titleKeyword && !bodyKeyword && excludeKeywordTitle.input.trim()) {
      handleClickAddNewKeyword('title')
    }
    handleChangeExcludeKeywordInput('title', '')
  }

  const handleSubmitBodyForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const titleKeyword = excludeKeywordBody.selectedKeywords.some((word) => word === excludeKeywordBody.input)
    const bodyKeyword = excludeKeywordTitle.selectedKeywords.some((word) => word === excludeKeywordBody.input)
    if (!titleKeyword && !bodyKeyword && excludeKeywordBody.input.trim()) {
      handleClickAddNewKeyword('body')
    }
    handleChangeExcludeKeywordInput('body', '')
  }

  return (
    <>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: undefined, md: 'center' }}
        spacing={{ xs: 0, md: 1 }}
      >
        <Typography sx={{ width: 120 }}>제목 제외 키워드</Typography>
        <Stack direction="row" spacing={1} alignItems="center" component="form" onSubmit={handleSubmitTitleForm}>
          <TextField
            size="small"
            placeholder="제목에서 제외할 키워드 입력"
            value={excludeKeywordTitle.input}
            onChange={(e) => handleChangeExcludeKeywordInput('title', e.target.value)}
          />
          <IconButton disabled={!excludeKeywordTitle.input} type="submit">
            <AddIcon />
          </IconButton>
          {excludeKeywordTitle.selectedKeywords.map((keyword, keywordIdx) => (
            <Chip
              key={`selectedKeywordsTitle${keywordIdx}`}
              label={keyword}
              onDelete={() => handleChangeRemoveExcludeKeyword('title', keywordIdx)}
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: undefined, md: 'center' }}
        spacing={{ xs: 0, md: 1 }}
      >
        <Typography sx={{ width: 120 }}>본문 제외 키워드</Typography>
        <Stack direction="row" spacing={1} alignItems="center" component="form" onSubmit={handleSubmitBodyForm}>
          <TextField
            size="small"
            placeholder="본문에서 제외할 키워드 입력"
            value={excludeKeywordBody.input}
            onChange={(e) => handleChangeExcludeKeywordInput('body', e.target.value)}
          />
          <IconButton disabled={!excludeKeywordBody.input} type="submit">
            <AddIcon />
          </IconButton>
          {excludeKeywordBody.selectedKeywords.map((keyword, keywordIdx) => (
            <Chip
              key={`selectedKeywordsBody${keywordIdx}`}
              label={keyword}
              onDelete={() => handleChangeRemoveExcludeKeyword('body', keywordIdx)}
            />
          ))}
        </Stack>
      </Stack>
    </>
  )
}
