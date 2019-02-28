import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

const Category = styled.div`
  width: 30%;
  background: ${props => props.theme.blueLightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  margin-top: 1em;
`
const IconWrapper = styled.div`
  background: white;
  border-radius: 50%;
  height: 6em;
  width: 6em;
  padding: 1em;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.blue};
  font-size: 3em;
`
const Description = styled.p`

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
