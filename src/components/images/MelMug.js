import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Mugshot = styled(Img)`
  border-radius: 50%;
  margin-bottom: 1em;
`

const MelMug = () => (
  <StaticQuery
    query={graphql`
      query {
        me: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 160, height: 160, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Mugshot fixed={data.me.childImageSharp.fixed} />}
  />
)
export default MelMug
