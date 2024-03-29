import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
  float: right;
`

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.9;
  font-weight: 400;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &[aria-current='page'] {
    color: white;
    border-bottom: 2px solid ${props => props.theme.blueLight};
    text-decoration: none;
    padding-bottom: 2px;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }
`

const MainMenu = () => (
  <Menu aria-label="Main navigation">
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/projects">Projects</MenuLink>
  </Menu>
)

export default MainMenu
