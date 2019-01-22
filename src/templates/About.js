import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'

import Layout from '../components/layout/layout';
import MelYoung from '../components/images/MelYoung'

const Resume = styled.div`
  h2 {
    color: ${props => props.theme.blue};
    font-size: 19px;
    margin-top: 40px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  h5 {
    font-size: 14px;
    color: #6f6f6f;
  }
  p {
    margin-bottom: 12px;
  }
  ul {
    margin-top: 24px;
    margin-left: 0;
  }
  li {
    list-style: none;
  }
`


export default function About({data}) {
  const about = data.markdownRemark;

  return (
    <Layout>
      <h1>{about.frontmatter.title}</h1>
      <MelYoung />
      <Resume dangerouslySetInnerHTML={{__html: about.html}}/>
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
