import { ReactNode } from 'react'

export type ToastProps = {
  body: string[] | string | ReactNode[]
  title?: string
}

export interface ToastMessageApi {
  error: (props: ToastProps | string) => void
  info: (props: ToastProps | string) => void
  success: (props: ToastProps | string) => void
  warning: (props: ToastProps | string) => void
}
