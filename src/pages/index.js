import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import SocialBlock from '../components/social-block/social-block'
import Me from '../components/images/me'

const IndexPage = () => (
  <Layout noHeader>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} bodyClass='blue center' />
    <Me />
    <h1>Hey there.</h1>
    <p className="intro-text">My name is Melissa Miller, and I’m a web developer and designer.</p>
    <SocialBlock />
  </Layout>
)

export default IndexPage
