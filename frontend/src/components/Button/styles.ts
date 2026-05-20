import styled from 'styled-components'

import { ButtonVariant } from './enums'
import { StyledButtonProps } from './types'

export const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background: ${({ $variant, theme }) =>
    $variant === ButtonVariant.primary
      ? theme.colors.primary
      : 'rgba(255, 255, 255, 0.04)'};
  border: 1px solid
    ${({ $variant, theme }) =>
      $variant === ButtonVariant.primary
        ? theme.colors.primary
        : 'rgba(255, 255, 255, 0.14)'};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textWhite};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold as number};
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  min-height: 52px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  transition:
    background 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:hover {
    background: ${({ $variant, theme }) =>
      $variant === ButtonVariant.primary
        ? theme.colors.primaryDark
        : 'rgba(255, 255, 255, 0.08)'};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`
