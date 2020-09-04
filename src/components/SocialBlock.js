import React from 'react'
import styled from 'styled-components'

import SocialLink from './SocialLink'

const Block = styled.div`
  text-align: center;
`

const SocialBlock = () => (
  <Block>
    <SocialLink
      name="GitHub"
      icon="github"
      prefix="fab"
      link="https://github.com/mel-miller"
    />
    <SocialLink
      name="Drupal"
      icon="drupal"
      prefix="fab"
      link="https://www.drupal.org/u/mel-miller"
    />
    <SocialLink
      name="Behance"
      icon="behance"
      prefix="fab"
      link="https://www.behance.net/MILLER2676e7fa"
    />
    <SocialLink
      name="LinkedIn"
      icon="linkedin-in"
      prefix="fab"
      link="https://www.linkedin.com/in/melissa-a-miller-6a37744/"
    />
    <SocialLink
      name="Instagram"
      icon="instagram"
      prefix="fab"
      link="https://www.instagram.com/miller2676/"
    />
    <SocialLink
      name="Email"
      icon="envelope"
      prefix="fas"
      link="mailto:me@mel-miller.com"
    />
  </Block>
)

export default SocialBlock
