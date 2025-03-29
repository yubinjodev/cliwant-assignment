import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useRfpListingTableColumnStore } from '../stores/rfp-listing-table-column-store'

export default function RfpListingTable() {
  const router = useRouter()
  const { columns } = useRfpListingTableColumnStore()

  const handleClickListing = () => {
    router.push('/rfp/listing/12')
  }

  return (
    <TableContainer component={Paper} sx={{ whiteSpace: 'nowrap' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">상태</TableCell>
            <TableCell>공고명</TableCell>
            <TableCell align="center">금액(원)</TableCell>
            <TableCell align="center">구분</TableCell>
            <TableCell align="center">공고기관</TableCell>
            <TableCell align="center">계시일</TableCell>
            <TableCell align="center">마감일</TableCell>
            {columns.map((col) => (
              <TableCell align="center" key={col.value}>
                {col.label}
              </TableCell>
            ))}
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
            {columns.map((col) => (
              <TableCell align="center" key={col.value}>
                {col.data}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
