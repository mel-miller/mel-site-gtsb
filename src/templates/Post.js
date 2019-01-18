import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout';

export default function Post({data}) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1 className="page-title">{post.frontmatter.title}</h1>
      <div className="dateline">{post.frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </Layout>
  )
}

export const query  = graphql`
  query PostByPath($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;
