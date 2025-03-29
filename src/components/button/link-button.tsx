import { LinkButtonProps } from '@/types/button'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function LinkButton(props: LinkButtonProps) {
  const { children, href, ...rest } = props

  return (
    <Link href={href} passHref legacyBehavior>
      <Button component="a" {...rest}>
        {children}
      </Button>
    </Link>
  )
}
