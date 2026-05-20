import Footer from '@components/Footer'
import LeftNavBar from '@components/LeftNavBar'
import TopNavBar from '@components/TopNavBar'

import { LayoutProps } from './types'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <LeftNavBar />
      <div className="content-wrapper">
        <TopNavBar />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
