import React from 'react'

import './main-content.scss'

const MainContent = ({content}) => (
  <div className="main-content">
    <div className="container">
      {content}
    </div>
  </div>
)

export default MainContent
