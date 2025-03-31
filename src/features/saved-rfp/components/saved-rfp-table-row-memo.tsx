import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
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
import { grey } from '@mui/material/colors'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSavedRfpFilterStore } from '../stores/saved-rfp-filter-store'
import { useSavedRfpTagFilterIndStore } from '../stores/saved-rfp-tag-filter-ind-store'
import { SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY } from '../utils/constants/saved-rfp-filter-proposal-status-category'
import SavedRfpTableTagFilterDialogInd from './saved-rfp-table-tag-filter-dialog-ind'

export default function SavedRfpTableRowMemo() {
  const { isMemoDisplayed } = useSavedRfpFilterStore()
  const { appliedTags, notes, saveNotes } = useSavedRfpTagFilterIndStore()

  const [isDialogOpen, setIsDialogOpen] = useState(false)

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

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const editNotes = () => {
    saveNotes(memo.notes)
    toast.success('메모가 수정되었습니다')
  }

  useEffect(() => {
    if (notes) setMemo((prev) => ({ ...prev, notes }))
  }, [notes])

  if (!isMemoDisplayed) return null

  return (
    <>
      <SavedRfpTableTagFilterDialogInd open={isDialogOpen} onClose={handleCloseDialog} />

      <TableRow>
        <TableCell colSpan={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack alignItems="flex-start" spacing={1}>
              <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', width: 400 }}>
                {appliedTags.map((tag, idx) => (
                  <Chip key={idx} label={tag.label} size="small" sx={{ bgcolor: tag.color }} />
                ))}
              </Stack>

              <IconButton onClick={handleOpenDialog}>
                <EditIcon />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center">
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography fontWeight={700} color={grey[500]}>
                  담당
                </Typography>
                <Chip icon={<AccountCircleIcon />} label="과제클라이원트" />
              </Stack>

              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography fontWeight={700} color={grey[500]}>
                  제안 상태
                </Typography>
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
                <Typography fontWeight={700} color={grey[500]}>
                  비고
                </Typography>
                <TextField
                  placeholder="필요한 메모를 하세요..."
                  size="small"
                  value={memo.notes}
                  onChange={handleChangeInput}
                  sx={{ width: 160 }}
                />
                <Button color="success" variant="contained" onClick={editNotes}>
                  수정
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </TableCell>
      </TableRow>
    </>
  )
}
