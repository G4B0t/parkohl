import { ComponentType } from 'react'

export type RouteConfig = {
  component: ComponentType
  isProtected: boolean
  permission?: string
  url: string
}
