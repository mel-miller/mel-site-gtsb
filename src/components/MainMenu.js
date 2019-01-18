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
  margin-right: 1.25em;

  &:hover {
    color: ${props => props.theme.blueLight};
  }

  &:last-child {
    margin-right: 0;
  }
`

const MainMenu = () => (
  <Menu aria-label="Main navigation">
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/projects">Projects</MenuLink>
    <MenuLink to="/contact">Contact</MenuLink>
  </Menu>
)

export default MainMenu
