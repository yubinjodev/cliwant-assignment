import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ColorResult } from 'react-color'
import { toast } from 'react-toastify'
import { useSavedRfpTagFilterIndStore } from '../stores/saved-rfp-tag-filter-ind-store'
import { useSavedRfpTagFilterStore } from '../stores/saved-rfp-tag-filter-store'
import SavedRfpColorPickerDialog from './saved-rfp-color-picker-dialog'

export default function SavedRfpTableTagFilterDialogInd({ open, onClose }: { open: boolean; onClose: VoidFunction }) {
  const [newTagInput, setNewTagInput] = useState('')
  const [editTagLabel, setEditTagLabel] = useState('')
  const [editTagColor, setEditTagColor] = useState<string>('#eeeeee')
  const [isColorDialogOpen, setIsColorDialogOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const { appliedTags, applyTag, removeAppliedTag, resetAppliedTag, removeAppliedTagByName } =
    useSavedRfpTagFilterIndStore()

  const {
    tags,
    selectedTag,
    selectedTagId,
    createNewTag,
    removeSelectedTag,
    selectTag,
    editTagName,
    editTagColor: handleEditTagColor,
    deleteTag,
  } = useSavedRfpTagFilterStore()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTagInput(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const tagExists = tags.some((tag) => tag.label === newTagInput)
    if (!tagExists && newTagInput.trim()) {
      createNewTag(newTagInput)
    }
    setNewTagInput('')
  }

  const handleChangeEditTagLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTagLabel(e.target.value)
  }

  const handleClickEditTagLabel = () => {
    if (selectedTagId === null) return
    editTagName(selectedTagId, editTagLabel)
    toast.success('태그 이름이 수정되었습니다')
  }

  const handleChangeColor = (color: ColorResult) => {
    if (selectedTagId === null) return
    setEditTagColor(color.hex)
    handleEditTagColor(selectedTagId, color.hex)
  }

  const handleClickDeleteTag = () => {
    if (selectedTagId === null) return
    deleteTag(selectedTagId)
    removeSelectedTag()
    setIsDeleteOpen(false)
    toast.success('태그가 삭제되었습니다')
  }

  const handleClickFinishEdit = () => {
    removeSelectedTag()
    setIsDeleteOpen(false)
  }

  useEffect(() => {
    if (selectedTag) {
      setEditTagColor(selectedTag.color)
      setEditTagLabel(selectedTag.label)
    }
  }, [selectedTag])

  useEffect(() => {
    removeSelectedTag()
  }, [])

  useEffect(() => {
    if (appliedTags && appliedTags.length) {
      appliedTags.forEach((appliedTag) => {
        if (!tags.includes(appliedTag)) removeAppliedTagByName(appliedTag.label)
      })
    }
  }, [tags])

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>필터 적용 태그</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack sx={{ height: 240 }} spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography>적용 태그</Typography>
              <Button variant="contained" onClick={resetAppliedTag}>
                태그 초기화
              </Button>
            </Stack>
            <Grid2 container spacing={1}>
              {appliedTags.map((tag, idx) => (
                <Grid2 key={idx}>
                  <Chip
                    label={tag.label}
                    onDelete={() => removeAppliedTag(idx)}
                    size="small"
                    sx={{ bgcolor: tag.color }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Stack>

          <Stack sx={{ height: 240 }} spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography>전체 태그</Typography>
              <Stack direction="row" spacing={1} component="form" onSubmit={handleFormSubmit}>
                <TextField placeholder="태그 추가" size="small" value={newTagInput} onChange={handleChangeInput} />
                <IconButton type="submit">
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>

            {selectedTag ? (
              <Stack spacing={4} alignItems="center" sx={{ border: `1px solid ${grey[200]}`, p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TextField size="small" value={editTagLabel} onChange={handleChangeEditTagLabel} />
                    <Box
                      sx={{ width: 50, height: 35, bgcolor: editTagColor, borderRadius: 1, cursor: 'pointer' }}
                      onClick={() => setIsColorDialogOpen(true)}
                    />
                    <SavedRfpColorPickerDialog
                      open={isColorDialogOpen}
                      onClose={() => setIsColorDialogOpen(false)}
                      color={editTagColor}
                      onColorChange={handleChangeColor}
                    />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button variant="contained" color="success" onClick={handleClickEditTagLabel}>
                      태그 수정
                    </Button>
                    <Button variant="contained" color="error" onClick={() => setIsDeleteOpen(true)}>
                      태그 삭제
                    </Button>
                    <Button variant="contained" onClick={handleClickFinishEdit}>
                      수정 완료
                    </Button>
                  </Stack>
                </Stack>

                {isDeleteOpen ? (
                  <Stack alignItems="center" sx={{ p: 3, border: `1px solid ${grey[200]}` }}>
                    <Typography>삭제된 태그는 복구할 수 없어요! 정말 삭제하시겠어요?</Typography>
                    <Stack direction="row" spacing={1}>
                      <Button color="inherit" onClick={() => setIsDeleteOpen(false)}>
                        아니오
                      </Button>
                      <Button variant="contained" color="error" onClick={handleClickDeleteTag}>
                        예
                      </Button>
                    </Stack>
                  </Stack>
                ) : null}
              </Stack>
            ) : null}

            <Grid2 container spacing={1}>
              {tags.map((tag, idx) => (
                <Grid2 key={idx}>
                  <Chip
                    label={tag.label}
                    onDelete={() => selectTag(idx)}
                    size="small"
                    deleteIcon={<EditIcon />}
                    sx={{ bgcolor: tag.color }}
                    onClick={() => applyTag(tag)}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
