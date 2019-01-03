import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

export default IndexPage
