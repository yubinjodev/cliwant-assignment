import DeleteIcon from '@mui/icons-material/Delete'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useRouter } from 'next/navigation'

export default function SavedRfpTable() {
  const router = useRouter()

  const handleClickListing = () => {
    router.push('/rfp/listing/12')
  }

  return (
    <TableContainer sx={{ whiteSpace: 'nowrap' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {/* todo create array */}
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
          <TableRow hover onClick={handleClickListing} sx={{ cursor: 'pointer' }}>
            <TableCell align="center">일반</TableCell>
            <TableCell align="center">용역</TableCell>
            <TableCell>[서울]2025년 도시제조업 작업환경경개선 지원사업 공고</TableCell>
            <TableCell align="center">공고문 참고</TableCell>
            <TableCell align="center">기업마당</TableCell>
            <TableCell align="center">2025-04-30</TableCell>
            <TableCell align="center">공고서 참조</TableCell>
            <TableCell align="center">
              <DeleteIcon sx={{ color: grey[500] }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
