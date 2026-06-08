import { ButtonHTMLAttributes, MouseEvent } from 'react'
import { To } from 'react-router-dom'

import { ICONS_TYPES } from '@components/Icon'
import { Props as IconProps } from '@components/Icon'

import { Sizes, StyleTypes } from './enums'

export interface ButtonIconProps {
  props?: Partial<IconProps>
  size: number
  type: keyof typeof ICONS_TYPES
}

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> {
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  leftIcon?: ButtonIconProps
  loading?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  rightIcon?: ButtonIconProps
  size?: Sizes
  styleType?: StyleTypes
  to?: To
  type?: 'button' | 'submit' | 'reset'
  width100?: boolean
}

export interface RootProps {
  $hasLabel: boolean
  disabled?: boolean
  size?: Sizes
  styleType?: StyleTypes
  width100?: boolean
}

export interface StyledIconProps {
  $buttonDisabled?: boolean
  $hasLabel: boolean
}
