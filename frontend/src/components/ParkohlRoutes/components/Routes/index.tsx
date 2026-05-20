import Home from '@pages/Home'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

import { RouteConfig } from './types'

export const routes: Record<string, RouteConfig> = {
  home: {
    component: Home,
    isProtected: true,
    url: '/home',
  },
  login: {
    component: Login,
    isProtected: false,
    url: '/login',
  },
  notFound: {
    component: NotFound,
    isProtected: false,
    url: '*',
  },
}
