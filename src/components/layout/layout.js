import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import MainContent from '../main-content/main-content'
import './layout.scss'

const Layout = ({ children, noHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        { noHeader
          ? null
          : <Header siteTitle={data.site.siteMetadata.title} />
        }
        <MainContent content={children} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
