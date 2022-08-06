import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Apple} from '../../svg'

import LogoSvg from '../../assets/logo.svg'
import LogoSmallSvg from '../../assets/logo-small.svg'

import { 
  Nav, Logo, MenuItem, MenuLabel
} from './views'

const Menu = [
  {label: 'Sample', icon: Apple, url: '/sample'},
]

const NavBar = () => {
  const [toggle, setToogle] = useState(true)
  const {pathname} = useLocation()

  return (
    <Nav
      expandCollapse={toggle}
      onClick={() => {setToogle(state => !state)}}
    >
      {toggle
        ?
        <Logo
          src={LogoSvg}
          expandCollapse={toggle}
          alt='Pelago'
        />
        :
        <Logo
          src={LogoSmallSvg}
          expandCollapse={toggle}
          alt='Pelago'
        />
      }
      {Menu.map(menu => {
        const {icon, label, url} = menu
        const Icon = icon
        const isActive = url === pathname
        return (
          <Link
            key={label}
            to={url}
          >
            <MenuItem 
              expandCollapse={toggle}
              isActive={isActive}
            >
              {icon && <Icon customStyle={{width: '24px'}}/>}
              {toggle && <MenuLabel>{label}</MenuLabel>}
            </MenuItem>
          </Link>
        )
      })}
    </Nav>
  )
}

export default NavBar;
