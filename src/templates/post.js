import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout';

import './post.scss';

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1 className="page-title">{post.frontmatter.title}</h1>
      <div className="dateline">{post.frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $path} }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`
