import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditIcon from '@mui/icons-material/Edit'
import {
  Chip,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useSavedRfpFilterStore } from '../stores/saved-rfp-filter-store'
import { SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY } from '../utils/constants/saved-rfp-filter-proposal-status-category'

export default function SavedRfpTableRowMemo() {
  const { isMemoDisplayed } = useSavedRfpFilterStore()

  const [memo, setMemo] = useState({
    proposalStatus: 'review-completed-proposal-possible',
    notes: '',
  })

  const handleChangeProposalStatus = (e: SelectChangeEvent) => {
    setMemo((prev) => ({
      ...prev,
      proposalStatus: e.target.value,
    }))
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo((prev) => ({
      ...prev,
      notes: e.target.value,
    }))
  }

  if (!isMemoDisplayed) return null

  return (
    <TableRow hover>
      <TableCell colSpan={8}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <IconButton>
            <EditIcon />
          </IconButton>

          <Stack direction="row" spacing={4} alignItems="center">
            <Stack alignItems="center" direction="row" spacing={1}>
              <Typography>담당</Typography>
              <Chip icon={<AccountCircleIcon />} label="과제클라이원트" />
            </Stack>

            <Stack alignItems="center" direction="row" spacing={1}>
              <Typography>제안 상태</Typography>
              <Select
                size="small"
                value={memo.proposalStatus}
                onChange={handleChangeProposalStatus}
                sx={{ width: 170 }}
              >
                {SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Stack alignItems="center" direction="row" spacing={1}>
              <Typography>비고</Typography>
              <TextField
                placeholder="필요한 메모를 하세요..."
                size="small"
                value={memo.notes}
                onChange={handleChangeInput}
                sx={{ width: 160 }}
              />
            </Stack>
          </Stack>
        </Stack>
      </TableCell>
    </TableRow>
  )
}
