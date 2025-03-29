import DownloadIcon from '@mui/icons-material/Download'
import { Button, Chip, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import { useRfpListingTableColumnStore } from '../stores/rfp-listing-table-column-store'

export default function RfpListingTableActions() {
  const { columns, isColumnsAltered, handleChangeActiveColumns, reset } = useRfpListingTableColumnStore()

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
          {/* todo change to  dropdown? */}
          {columns.map((col) => (
            <Chip key={col.value} label={col.label} onDelete={() => handleChangeActiveColumns(col.value)} />
          ))}
        </Stack>
        {isColumnsAltered ? (
          <Button onClick={reset} variant="contained">
            전체 표시
          </Button>
        ) : null}
      </Stack>
    </Stack>
  )
}
