import React, {useState} from 'react'

import LogoSvg from '../../assets/logo.svg'
import LogoSmallSvg from '../../assets/logo-small.svg'

import { Nav, Logo } from './views'

const NavBar = () => {
  const [toggle, setToogle] = useState(true)

  return (
    <Nav
      expandCollapse={toggle}
      onClick={() => {setToogle(state => !state)}}
    >
      {toggle
        ?
        <Logo
          src={LogoSvg}
          alt='Pelago'
        />
        :
        <Logo
          src={LogoSmallSvg}
          alt='Pelago'
        />
      }
    </Nav>
  )
}

export default NavBar;
