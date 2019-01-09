import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components';

import Header from '../header/header'
import MainContent from '../main-content/main-content'

// Extract Sass variables into a JS object
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

const Layout = ({ children, noHeader }) => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
