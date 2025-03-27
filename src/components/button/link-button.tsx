import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'
import { Url } from '../../types/index'

type LinkButtonProps = ButtonProps & {
  href: Url
}

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
