import React from 'react'
import { Link } from 'gatsby'

import MainMenu from '../main-menu/main-menu'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="site-title">
        <Link to="/" className="site-title__link">
          {siteTitle}
        </Link>
        <MainMenu />
      </div>
    </div>
  </header>
)

export default Header
