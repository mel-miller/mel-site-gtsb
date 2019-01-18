import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';


export default function About({data}) {
  const node = data.markdownRemark;

  return (
    <Layout>
        <h1>{node.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: node.html}}/>
    </Layout>
  )
}

export const query  = graphql`
  query AboutQuery($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
