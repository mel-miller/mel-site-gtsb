import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1.5em 0;
`

const MainContent = ({content}) => (
  <Wrapper className="main-content">
    <div className="container">
      {content}
    </div>
  </Wrapper>
)

export default MainContent
