import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="post-list">
      <h2>Post Index</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li>
            <Link
              key={post.node.id}
              to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`

export default IndexPage
