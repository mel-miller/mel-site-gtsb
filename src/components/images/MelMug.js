import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Picture = styled(Img)`
  border-radius: 50%;
  margin-bottom: 20px;
`

const MelMug = () => (
  <StaticQuery
    query={graphql`
      query {
        me: file(relativePath: { eq: "me.png" }) {
          childImageSharp {
            fixed(width: 160, height: 160, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Picture fixed={data.me.childImageSharp.fixed} />}
  />
)
export default MelMug
