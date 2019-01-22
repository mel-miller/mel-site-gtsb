import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import SocialBlock from '../components/SocialBlock'
import MelMug from '../components/images/MelMug'

const IntroText = styled.p`
  font-size: 130%;
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`

const IndexPage = () => (
  <Layout noHeader>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} bodyClass="blue center" />
    <MelMug />
    <h1>Hey there.</h1>
    <IntroText>My name is Melissa Miller, and I’m a web developer and designer living in San Francisco.</IntroText>
    <SocialBlock />
  </Layout>
)

export default IndexPage
