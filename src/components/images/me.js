import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './images.scss'

const Me = () => (
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
    render={data => <Img fixed={data.me.childImageSharp.fixed} className="image--me" />}
  />
)
export default Me
