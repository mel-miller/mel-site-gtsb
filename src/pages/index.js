import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import SocialBlock from '../components/SocialBlock'
import MelMug from '../components/images/MelMug'

const IntroText = styled.p`
  font-size: 130%;
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`

const MoreButton = styled(Link)`
  border: 1px solid white;
  border-radius: 8px;
  padding: 8px 14px;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: white;
  background: ${props => props.theme.blue};
  display: inline-block;
  margin-top: 30px;

  &:hover {
    color: ${props => props.theme.blue};
    background: white;
    border: 1px solid ${props => props.theme.blueLight};
  }
`

const IndexPage = () => (
  <Layout noHeader>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} bodyClass="blue center" />
    <MelMug />
    <h1>Hey there.</h1>
    <IntroText>My name is Melissa Miller, and I’m a web developer and designer living in San Francisco.</IntroText>
    <MoreButton to="/about">Yes, there's more.</MoreButton>
    <SocialBlock />
  </Layout>
)

export default IndexPage
