import { ButtonHTMLAttributes, MouseEvent, SVGProps } from 'react'
import { To } from 'react-router-dom'

import { IconName } from '@components/Icon/enums'

import { Sizes, StyleTypes } from './enums'

export interface ButtonIconProps {
  props?: Partial<SVGProps<SVGSVGElement>>
  size: number
  type: IconName
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
