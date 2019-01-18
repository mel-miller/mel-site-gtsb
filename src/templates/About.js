import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';


export default function About({data}) {
  const about = data.markdownRemark;

  return (
    <Layout>
      <h1>{about.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: about.html}}/>
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
