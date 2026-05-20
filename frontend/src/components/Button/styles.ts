import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { css } from 'styled-components'

import Icon from '@components/Icon'
import { rgba } from '@themes/mixins'

import { Sizes, StyleTypes } from './enums'
import { RootProps, StyledIconProps } from './types'

export const StyledLoader = styled.span`
  animation: button-loader-spin 700ms linear infinite;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.spacing.borderRadius.round};
  display: inline-flex;
  height: 22px;
  width: 22px;

  @keyframes button-loader-spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export const Root = styled.button<RootProps>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.spacing.borderRadius.sm};
  cursor: pointer;
  display: flex;
  font: inherit;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  transition: background-color 200ms ease-in-out;
  width: ${({ width100 }) => (width100 ? '100%' : 'initial')};

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }

  ${({ styleType = StyleTypes.filled, theme }) => {
    switch (styleType) {
      case StyleTypes.outlined:
        return css`
          background-color: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.primary};
            border-top-color: ${theme.colors.primary};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.primary, 6)};
          }

          &:disabled {
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.link:
        return css`
          background-color: ${rgba(theme.colors.primaryLight, 16)};
          border-color: transparent;
          color: ${theme.colors.primaryLight};
          text-decoration: none;

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.primaryLight};
            border-top-color: ${theme.colors.primaryLight};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.primaryLight, 24)};
          }

          &:disabled {
            background-color: transparent;
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.danger:
        return css`
          background-color: transparent;
          border-color: ${theme.colors.red};
          color: ${theme.colors.red};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.red};
            border-top-color: ${theme.colors.red};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.red, 10)};
          }

          &:disabled {
            background-color: ${theme.colors.surfaceSecondary};
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.success:
        return css`
          background-color: ${theme.colors.green};
          border-color: ${theme.colors.green};
          color: ${theme.colors.white};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.white};
            border-top-color: ${theme.colors.white};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.green, 85)};
          }

          &:disabled {
            background-color: ${theme.colors.surfaceSecondary};
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.update:
        return css`
          background-color: transparent;
          border-color: ${theme.colors.turquoiseIcon};
          color: ${theme.colors.turquoiseIcon};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.turquoiseIcon};
            border-top-color: ${theme.colors.turquoiseIcon};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.turquoiseIcon, 6)};
          }

          &:disabled {
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.updateViolet:
        return css`
          background-color: transparent;
          border-color: ${theme.colors.violetIcon};
          color: ${theme.colors.violetIcon};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.violetIcon};
            border-top-color: ${theme.colors.violetIcon};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.violetIcon, 6)};
          }

          &:disabled {
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.simple:
        return css`
          background-color: transparent;
          border: none;
          color: ${theme.colors.textPrimary};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.textPrimary};
            border-top-color: ${theme.colors.textPrimary};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.divider, 10)};
          }

          &:disabled {
            color: ${theme.colors.grey};
          }
        `
      case StyleTypes.simpleDanger:
        return css`
          background-color: transparent;
          border: none;
          color: ${theme.colors.red};
          padding: 0;

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.red};
            border-top-color: ${theme.colors.red};
          }

          &:hover:not(:disabled) {
            background-color: ${rgba(theme.colors.red, 10)};
          }

          &:disabled {
            color: ${theme.colors.grey};
          }
        `
      default:
        return css`
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          & ${StyledLoader} {
            border-bottom-color: ${theme.colors.background};
            border-top-color: ${theme.colors.background};
          }

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
          }

          &:disabled {
            background-color: ${theme.colors.surfaceSecondary};
            border-color: ${theme.colors.divider};
            color: ${theme.colors.grey};
          }
        `
    }
  }}

  ${({ $hasLabel, size = Sizes.medium, styleType = StyleTypes.filled }) => {
    switch (size) {
      case Sizes.small:
        return css`
          height: 32px;
          padding: ${$hasLabel
            ? styleType === StyleTypes.simple ||
              styleType === StyleTypes.simpleDanger
              ? '0 10px'
              : '0 16px'
            : '0 6px'};
        `
      case Sizes.large:
        return css`
          height: 54px;
          padding: ${$hasLabel ? '0 18px' : '0 12px'};
        `
      default:
        return css`
          height: 40px;
          padding: ${$hasLabel ? '0 16px' : '0 10px'};
        `
    }
  }}
`

export const LeftIcon = styled(Icon)<StyledIconProps>`
  margin-right: ${({ $hasLabel }) => ($hasLabel ? '8px' : '0')};
  scale: 1;
  transition: scale 200ms ease-in-out;

  ${Root}:hover & {
    scale: 1.1;
  }
`

export const RightIcon = styled(Icon)<StyledIconProps>`
  margin-left: ${({ $hasLabel }) => ($hasLabel ? '8px' : '0')};
  scale: 1;
  transition: scale 200ms ease-in-out;

  ${({ $buttonDisabled }) =>
    !$buttonDisabled &&
    css`
      ${Root}:hover & {
        scale: 1.1;
      }
    `}
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium as number};
  letter-spacing: 1.25px;
  line-height: normal;
  text-align: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
