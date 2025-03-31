import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { ReactElement } from 'react'

export const RFP_LISTING_TABLE_COLUMN_INITIAL_STATE: { value: string; label: string; data: string | ReactElement }[] = [
  {
    value: 'industry-conditions',
    label: '업종 조건',
    data: <CheckBoxIcon color="success" />,
  },
  {
    value: 'manufactured-goods',
    label: '제조 물품',
    data: <CheckBoxIcon color="success" />,
  },
  {
    value: 'supply-goods',
    label: '공급 물품',
    data: <CheckBoxIcon color="success" />,
  },
  {
    value: 'regional-restrictions',
    label: '지역 제한',
    data: <CheckBoxIcon color="success" />,
  },
  {
    value: 'joint-procurement',
    label: '공동 수급',
    data: '문서 참조',
  },
  {
    value: 'point-elements',
    label: '가점 요소',
    data: '공고서 참조',
  },
  {
    value: 'bidder-selection-method',
    label: '낙찰자 선정 방식',
    data: '공고서 참조',
  },
  {
    value: 'company-restrictions',
    label: '기업 제한',
    data: '대기업 참여 불가',
  },
  {
    value: 'price-selection-method',
    label: '가격 선정 방식',
    data: '공고서 참조',
  },
]
