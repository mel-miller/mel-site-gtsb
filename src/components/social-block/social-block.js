import React from 'react'
import SocialLink from '../social-link/social-link'

import './social-block.scss'


const SocialBlock = () => (
  <div className="social-block">
    <SocialLink name="GitHub" icon="github" prefix="fab" link="https://github.com/mel-miller" />
    <SocialLink name="Drupal" icon="drupal" prefix="fab" link="https://www.drupal.org/u/mel-miller" />
    <SocialLink name="LinkedIn" icon="linkedin-in" prefix="fab" link="https://www.linkedin.com/in/melissa-a-miller-6a37744/" />
    <SocialLink name="Instagram" icon="instagram" prefix="fab" link="https://www.instagram.com/miller2676/" />
    <SocialLink name="Email" icon="envelope" prefix="fas" link="mailto:miller.2676@gmail.com" />
  </div>
)

export default SocialBlock
