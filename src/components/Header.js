import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MainMenu from './MainMenu'

const Wrapper = styled.header`
  background: ${props => props.theme.blue};
  color: white;
`
const HomeLink = styled(Link)`
  color: white;
  font-size: 150%;
  text-decoration: none;

  &:hover {
    ${props => props.theme.blueLight};
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <div className="container">
      <div>
        <HomeLink to="/">
          {siteTitle}
        </HomeLink>
        <MainMenu />
      </div>
    </div>
  </Wrapper>
)

export default Header
