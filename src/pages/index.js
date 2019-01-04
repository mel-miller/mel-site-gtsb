import React from 'react'
// import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout noHeader background="blue">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} bodyClass='blue' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
