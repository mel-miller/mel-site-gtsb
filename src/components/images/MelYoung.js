import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Photo = styled(Img)`
  margin: 0 0 20px 30px;
  float: right;
`

const MelYoung = () => (
  <StaticQuery
    query={graphql`
      query {
        me: file(relativePath: { eq: "young-me.jpg" }) {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Photo fixed={data.me.childImageSharp.fixed} />}
  />
)
export default MelYoung
