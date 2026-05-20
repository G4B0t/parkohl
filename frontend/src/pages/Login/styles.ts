import styled from 'styled-components'

import { LoginFieldProps } from './types'

export const LoginPage = styled.section`
  background:
    radial-gradient(circle at 18% 70%, rgba(37, 99, 235, 0.5), transparent 26%),
    radial-gradient(circle at 72% 28%, rgba(96, 165, 250, 0.18), transparent 32%),
    ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(420px, 1.1fr);
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const BrandPanel = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(32px, 7vw, 88px);
  position: relative;

  &::after {
    background:
      linear-gradient(160deg, transparent 20%, rgba(96, 165, 250, 0.45)),
      repeating-radial-gradient(
        ellipse at center,
        rgba(96, 165, 250, 0.5) 0 1px,
        transparent 1px 10px
      );
    border-radius: 42% 58% 36% 64%;
    bottom: -120px;
    content: '';
    height: 420px;
    left: -70px;
    opacity: 0.75;
    position: absolute;
    transform: rotate(-8deg);
    width: 520px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

export const BrandMark = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.textWhite};
  display: inline-flex;
  font-size: 1.65rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold as number};
  gap: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.18rem;
  position: relative;
  z-index: 1;
`

export const BrandIcon = styled.span`
  align-items: center;
  background: rgba(37, 99, 235, 0.18);
  border-radius: ${({ theme }) => theme.spacing.borderRadius.sm};
  color: ${({ theme }) => theme.colors.primaryLight};
  display: inline-flex;
  height: 48px;
  justify-content: center;
  width: 48px;
`

export const BrandCopy = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  max-width: 340px;
  position: relative;
  z-index: 1;
`

export const BrandTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.04;
  margin: 0;
`

export const BrandAccent = styled.span`
  color: ${({ theme }) => theme.colors.primaryLight};
  display: block;
`

export const BrandDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.15rem;
  line-height: 1.65;
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
`

export const FormPanel = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(24px, 6vw, 88px);

  @media (max-width: 860px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const LoginCard = styled.form`
  backdrop-filter: blur(18px);
  background: rgba(29, 41, 57, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.spacing.borderRadius.md};
  box-shadow: 0 24px 80px rgba(2, 6, 23, 0.42);
  max-width: 620px;
  padding: clamp(32px, 5vw, 64px);
  width: 100%;
`

export const LockBadge = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.spacing.borderRadius.md};
  color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  height: 92px;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  width: 92px;
`

export const FormHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 2.2rem;
  line-height: 1.1;
  margin: 0;
`

export const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
`

export const FieldGroup = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  display: grid;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium as number};
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const FieldShell = styled.div<LoginFieldProps>`
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${({ theme }) => theme.spacing.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  display: grid;
  grid-template-columns: 24px 1fr ${({ $hasAction }) =>
      $hasAction ? '32px' : '0'};
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 62px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.14);
  }
`

export const TextInput = styled.input`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font: inherit;
  min-width: 0;
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

export const IconAction = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  display: inline-flex;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

export const FormOptions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.xl};
`

export const RememberButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
`

export const Checkbox = styled.span<{ $isChecked: boolean }>`
  align-items: center;
  background: ${({ $isChecked, theme }) =>
    $isChecked ? theme.colors.primary : 'rgba(255, 255, 255, 0.04)'};
  border: 1px solid
    ${({ $isChecked, theme }) =>
      $isChecked ? theme.colors.primary : 'rgba(255, 255, 255, 0.16)'};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.xs};
  color: ${({ theme }) => theme.colors.textWhite};
  display: inline-flex;
  height: 28px;
  justify-content: center;
  width: 28px;
`

export const TextLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium as number};
`

export const Divider = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: 1fr auto 1fr;
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};

  &::before,
  &::after {
    background: rgba(255, 255, 255, 0.12);
    content: '';
    height: 1px;
  }
`

export const SocialGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

export const SignUpCopy = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => theme.spacing.xl} 0 0;
  text-align: center;
`
