import React from 'react'
import { Link } from 'gatsby'

import './main-menu.scss'

const MainMenu = () => (
  <nav className="main-nav">
    <Link to="/" className="main-nav__link">Home</Link>
  </nav>
)

export default MainMenu
