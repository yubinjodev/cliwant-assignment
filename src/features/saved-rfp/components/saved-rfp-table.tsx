import PromptDialog from '@/components/dialog/prompt-dialog'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
import { useSavedRfpStore } from '../stores/saved-rfp-store'

export default function SavedRfpTable() {
  const { isSaved, handleChangeRemove } = useSavedRfpStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleClickDeleteListing = () => {
    setIsDialogOpen(true)
  }

  const handleClickCloseDialog = () => {
    setIsDialogOpen(false)
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

      {/* todo 메모 표시 feature */}
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
