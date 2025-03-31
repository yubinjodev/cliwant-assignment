import PromptDialog from '@/components/dialog/prompt-dialog'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Chip,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { ChangeEvent, useState } from 'react'
import { useSavedRfpFilterStore } from '../stores/saved-rfp-filter-store'
import { useSavedRfpStore } from '../stores/saved-rfp-store'
import { SAVED_RFP_FILTER_PROPOSAL_STATUS_CATEGORY } from '../utils/constants/saved-rfp-filter-proposal-status-category'

export default function SavedRfpTable() {
  const { isSaved, handleChangeRemove } = useSavedRfpStore()
  const { isMemoDisplayed } = useSavedRfpFilterStore()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [memo, setMemo] = useState({
    proposalStatus: 'review-completed-proposal-possible',
    notes: '',
  })

  const handleClickDeleteListing = () => {
    setIsDialogOpen(true)
  }

  const handleClickCloseDialog = () => {
    setIsDialogOpen(false)
  }

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

  return (
    <>
      <PromptDialog
        open={isDialogOpen}
        handleCloseDialog={handleClickCloseDialog}
        title="관심공고 삭제"
        contentText="선택된 프로젝트를 관심 목록에서 삭제하시겠습니까?"
        handleClickConfirm={handleChangeRemove}
      />

      <TableContainer sx={{ whiteSpace: 'nowrap' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">공고 단계</TableCell>
              <TableCell align="center">구분</TableCell>
              <TableCell>공고명</TableCell>
              <TableCell align="center">금액(원)</TableCell>
              <TableCell align="center">공고기관</TableCell>
              <TableCell align="center">계시일</TableCell>
              <TableCell align="center">마감일</TableCell>
              <TableCell align="center">삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isSaved ? (
              <>
                <TableRow hover>
                  <TableCell align="center">일반</TableCell>
                  <TableCell align="center">용역</TableCell>
                  <TableCell>[서울]2025년 도시제조업 작업환경경개선 지원사업 공고</TableCell>
                  <TableCell align="center">공고문 참고</TableCell>
                  <TableCell align="center">기업마당</TableCell>
                  <TableCell align="center">2025-04-30</TableCell>
                  <TableCell align="center">공고서 참조</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={handleClickDeleteListing}>
                      <DeleteIcon sx={{ color: grey[500] }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {isMemoDisplayed ? (
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
                ) : null}
              </>
            ) : (
              <TableRow hover>
                <TableCell colSpan={8} align="center">
                  표시할 공고가 없습니다
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
