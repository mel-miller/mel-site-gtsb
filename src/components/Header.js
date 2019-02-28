import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MainMenu from './MainMenu'
import logo from '../images/mm-logo.svg'


const Wrapper = styled.header`
  background: ${props => props.theme.blue};
  color: white;
  padding-top: 18px;
  padding-bottom: 12px;
`
const HomeLink = styled(Link)`
  display: inline-block;
  &:hover {
    filter: brightness(2);
  }
`
const Logo = styled.img`
  height: 30px;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <div className="container">
      <HomeLink to="/">
        <Logo src={logo} alt={siteTitle} />
      </HomeLink>
      <MainMenu />
    </div>
  </Wrapper>
)

export default Header
