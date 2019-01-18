import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'

import Layout from '../components/layout/layout';


const ContactInfo = styled.div`
  border-bottom: 1px solid ${props => props.theme.blue};
  margin-bottom: 1em;

  h1 {
    margin-bottom: 0.25em;
  }
`



export default function Resume({data}) {
  const resume = data.markdownRemark;

  return (
    <Layout>
      <ContactInfo>
        <h1>{resume.frontmatter.name}</h1>
      </ContactInfo>
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
