import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

export default function Resume({data}) {
  const resume = data.markdownRemark;

  return (
    <Layout>
      <h1>{resume.frontmatter.name}</h1>
      <div dangerouslySetInnerHTML={{__html: resume.html}}/>
    </Layout>
  )
}

export const query  = graphql`
  query ResumeQuery($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        name
        email
      }
    }
  }
`;
