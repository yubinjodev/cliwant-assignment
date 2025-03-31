import { KeyboardEvent } from 'react'

export const BLOCK_NON_NUMERICAL_INPUT = (e: KeyboardEvent<HTMLDivElement | HTMLInputElement>) => {
  if (/[\d\b]/.test(e.key) || ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key)) {
    return
  }

  e.preventDefault()
}
