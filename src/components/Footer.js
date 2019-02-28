import React from 'react'
import styled from 'styled-components'

import SocialBlock from './SocialBlock'

const Wrapper = styled.footer`
  background: ${props => props.theme.blue};
  color: white;
  padding-top: 20px;
`
const FinePrint = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`

const Footer = () => (
  <Wrapper>
    <div className="container">
      <SocialBlock />
      <FinePrint>©2019 mel-miller.com</FinePrint>
    </div>
  </Wrapper>
)

export default Footer
