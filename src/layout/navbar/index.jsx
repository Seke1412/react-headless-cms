import React, {useState} from 'react'
import { Nav } from './views'

const NavBar = () => {
  const [toggle, setToogle] = useState(false)

  return (
    <Nav
      expandCollapse={toggle}
      onClick={() => {setToogle(state => !state)}}
    >
      this is nav bar 
    </Nav>
  )
}

export default NavBar;
