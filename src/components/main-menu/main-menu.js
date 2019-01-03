import React from 'react'
import { Link } from 'gatsby'

import './main-menu.scss'

const MainMenu = () => (
  <nav className="main-nav">
    <Link to="/page-2/" className="main-nav__link">Page 2</Link>
    <Link to="/page-2/" className="main-nav__link last">Page 3</Link>
  </nav>
)

export default MainMenu
