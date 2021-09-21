import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'

import Layout from '../components/layout/layout';
import MelYoung from '../components/images/MelYoung'

const Resume = styled.div`
  h2 {
    color: ${props => props.theme.blue};
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 17px;
    margin-bottom: 12px;
    font-weight: normal;
  }
  h5 {
    font-size: 14px;
    font-weight: normal;
  }
  p {
    margin-bottom: 16px;
  }
  ul {
    margin-top: 24px;
    margin-left: 0;
  }
  li {
    list-style: none;
  }
  hr {
    margin-bottom: -15px;
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
