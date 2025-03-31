import DownloadIcon from '@mui/icons-material/Download'
import { Autocomplete, Button, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import { useRfpListingTableColumnStore } from '../stores/rfp-listing-table-column-store'
import { RFP_LISTING_TABLE_COLUMN_INITIAL_STATE } from '../utils/constants/rfp-listing-table-column-initial-state'

export default function RfpListingTableActions() {
  const { columns, handleChangeActiveColumns, reset } = useRfpListingTableColumnStore()

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>검색 결과 1개</Typography>

        <Stack
          alignItems="center"
          spacing={1}
          direction="row"
          sx={{ '& .MuiTypography-root': { color: grey[500], fontWeight: 700 } }}
        >
          <Typography>검색 결과가 잘려 보이는 경우</Typography>
          <Image src="/rfp-listing-table-guide.png" alt="shift + scroll" width={80} height={33} />
          <Typography>해보세요!</Typography>
        </Stack>

        <Button color="inherit" startIcon={<DownloadIcon color="success" />}>
          EXCEL 다운로드
        </Button>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          <Autocomplete
            sx={{ minWidth: 320 }}
            multiple
            options={RFP_LISTING_TABLE_COLUMN_INITIAL_STATE}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => handleChangeActiveColumns(value)}
            value={columns}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={columns && columns.length ? undefined : '추가로 표시할 공고 목록 내용을 선택해주세요'}
              />
            )}
          />
        </Stack>
        {columns && columns.length !== RFP_LISTING_TABLE_COLUMN_INITIAL_STATE.length ? (
          <Button variant="contained" onClick={reset}>
            전체 표시
          </Button>
        ) : null}
      </Stack>
    </Stack>
  )
}
