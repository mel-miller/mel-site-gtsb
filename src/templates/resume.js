import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

export default class Resume extends Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.name}</h1>
        <div dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }} />
      </Layout>
    )
  }
}

export const query  = graphql`
  query ResumeQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        slug
        name
        email
      }
    }
  }
`;
