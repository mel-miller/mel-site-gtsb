import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

const Link = styled.a`
  font-size: 1.625em;
  opacity: 0.8;
  padding: 0.125em 0.25em;
    &:hover {
      opacity: 1;
    }
    &:focus {
      outline: 1px dotted white;
    }
`

const SocialLink = ({icon, prefix, link, name}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <span className="visually-hidden">{`Link to Melissa's ${name}`}</span>
    <FontAwesomeIcon icon={[prefix, icon]} fixedWidth inverse />
  </Link>
)

export default SocialLink
