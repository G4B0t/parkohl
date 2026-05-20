import { memo } from 'react'

import { DEFAULT_BUTTON_TYPE } from './constants'
import { ButtonVariant } from './enums'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button = ({
  children,
  fullWidth = false,
  type = DEFAULT_BUTTON_TYPE,
  variant = ButtonVariant.primary,
  ...buttonProps
}: ButtonProps) => {
  return (
    <StyledButton
      $fullWidth={fullWidth}
      $variant={variant}
      type={type}
      {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export default memo(Button)
