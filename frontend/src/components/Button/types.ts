import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonVariant } from './enums'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
}

export interface StyledButtonProps {
  $fullWidth: boolean
  $variant: ButtonVariant
}
