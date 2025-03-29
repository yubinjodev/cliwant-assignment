import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function RfpListingTable() {
  const router = useRouter()

  const handleClickListing = () => {
    router.push('/rfp/listing/12')
  }

  return (
    <TableContainer component={Paper} sx={{ whiteSpace: 'nowrap' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {/* todo create array  */}
            <TableCell align="center">상태</TableCell>
            <TableCell>공고명</TableCell>
            <TableCell align="center">금액(원)</TableCell>
            <TableCell align="center">구분</TableCell>
            <TableCell align="center">공고기관</TableCell>
            <TableCell align="center">계시일</TableCell>
            <TableCell align="center">마감일</TableCell>
            <TableCell align="center">업종 조건</TableCell>
            <TableCell align="center">제조 물품</TableCell>
            <TableCell align="center">공급 물품</TableCell>
            <TableCell align="center">지역 제한</TableCell>
            <TableCell align="center">공동 수급</TableCell>
            <TableCell align="center">낙찰자 신청 방식</TableCell>
            <TableCell align="center">기업 제한</TableCell>
            <TableCell align="center">가격 신청 방식</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover onClick={handleClickListing} sx={{ cursor: 'pointer' }}>
            <TableCell align="center">일반</TableCell>
            <TableCell>[서울]2025년 도시제조업 작업환경경개선 지원사업 공고</TableCell>
            <TableCell align="center">공고문 참고</TableCell>
            <TableCell align="center">용역</TableCell>
            <TableCell align="center">기업마당</TableCell>
            <TableCell align="center">2025-04-30</TableCell>
            <TableCell align="center">공고서 참조</TableCell>
            <TableCell align="center">
              <CheckBoxIcon color="success" />
            </TableCell>
            <TableCell align="center">
              <CheckBoxIcon color="success" />
            </TableCell>
            <TableCell align="center">
              <CheckBoxIcon color="success" />
            </TableCell>
            <TableCell align="center">
              <CheckBoxIcon color="success" />
            </TableCell>
            <TableCell align="center">문서 참조</TableCell>
            <TableCell align="center">공고서 참조</TableCell>
            <TableCell align="center">대기업 참여 불가</TableCell>
            <TableCell align="center">공고서 참조</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
