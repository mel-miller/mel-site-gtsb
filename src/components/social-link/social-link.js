import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social-link.scss'

library.add(fab, fas)

const SocialLink = ({icon, prefix, link, name}) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={`social-link social-link--${name}`}>
    <span class="visually-hidden">{`Link to Melissa's ${name}`}</span>
    <FontAwesomeIcon icon={[prefix, icon]} inverse/>
  </a>
)

export default SocialLink
