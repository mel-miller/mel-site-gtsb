import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

const Link = styled.a`
  color: white;
  padding: 20px 12px 10px;
  &:hover {
    color: ${props => props.theme.blueLight};
  }
  &:focus {
    outline: 2px solid white;
  }
`

const SocialLink = ({ icon, prefix, link, name }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <span className="visually-hidden">{`Link to Melissa's ${name}`}</span>
    <FontAwesomeIcon icon={[prefix, icon]} size="2x" />
  </Link>
)

export default SocialLink
