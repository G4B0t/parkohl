import { SOCIAL_LOGIN_OPTIONS } from './constants'

export type SocialLoginProvider = (typeof SOCIAL_LOGIN_OPTIONS)[number]

export interface LoginFormState {
  email: string
  password: string
  rememberMe: boolean
}

export interface LoginFieldProps {
  $hasAction?: boolean
}
