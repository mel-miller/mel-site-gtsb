import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
