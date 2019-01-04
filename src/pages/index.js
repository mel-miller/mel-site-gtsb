import React from 'react'
// import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import SocialBlock from '../components/social-block/social-block'

const IndexPage = () => (
  <Layout noHeader>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} bodyClass='blue center' />
    <h1>Hey there.</h1>
    <p className="intro-text">My name is Melissa Miller, and I’m a web developer and designer.</p>
    <SocialBlock />
  </Layout>
)

export default IndexPage
