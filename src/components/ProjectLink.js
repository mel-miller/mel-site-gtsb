import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

const Category = styled.div`
  width: 31%;
  background: ${props => props.theme.blueLightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 30px;
  margin-top: 10px;

  @media only screen and (max-width: 720px) {
    width: 100%;
    margin-top: 30px;
  }
`
const IconWrapper = styled.div`
  background: white;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.blue};
  font-size: 3em;
`
const Description = styled.p`
  text-align: center;
`

const ProjectLink = ({icon, prefix, link, name, text}) => (
  <Category >
    <IconWrapper>
      <Icon icon={[prefix, icon]} fixedWidth />
    </IconWrapper>
    <h2>{name}</h2>
    <Description>{text}</Description>
  </Category>
)

export default ProjectLink
