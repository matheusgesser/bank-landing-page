import React, { useState } from 'react'
import { useScrollDirection } from '../../hooks'

import { MenuBackground, Wrapper, Logo, NavBar } from './styles'
import WingIcon from '../../assets/wing-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const scrollUp = useScrollDirection() == 'up';
  console.log(scrollUp)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <>
      <MenuBackground style={{
        display:
          showMenu ? 'inline' : 'none'
      }} >
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Insight</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </MenuBackground>

      <Wrapper style={{
        transform:
          scrollUp ? 'translateY(0)' : 'translateY(-6rem)'
      }} >
        <Logo>
          <img src={WingIcon} />
          <h1>Gesser Bank</h1>
        </Logo>
        <NavBar>
          <ul>
            <li>About</li>
            <li>Insight</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </NavBar>
        <GiHamburgerMenu onClick={toggleMenu} />
      </Wrapper>
    </>
  )
}