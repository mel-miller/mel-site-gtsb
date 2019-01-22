import React from 'react'
import styled from 'styled-components'

import SocialLink from './SocialLink'

const Block = styled.div`
  margin-top: 2em;
`

const SocialBlock = () => (
  <Block>
    <SocialLink name="GitHub" icon="github" prefix="fab" link="https://github.com/mel-miller" />
    <SocialLink name="Drupal" icon="drupal" prefix="fab" link="https://www.drupal.org/u/mel-miller" />
    <SocialLink name="LinkedIn" icon="linkedin-in" prefix="fab" link="https://www.linkedin.com/in/melissa-a-miller-6a37744/" />
    <SocialLink name="Instagram" icon="instagram" prefix="fab" link="https://www.instagram.com/miller2676/" />
    <SocialLink name="Email" icon="envelope" prefix="fas" link="mailto:miller.2676@gmail.com" />
  </Block>
)

export default SocialBlock
