import NavBar from './navbar'
import Footer from './footer'

import {Page, Body}from './views'

const Layout = ({children}) => {
  return (
    <Page>
      <NavBar/>
      <Body>
        {children}
        <Footer/>
      </Body>
    </Page>
  )
}

export default Layout
