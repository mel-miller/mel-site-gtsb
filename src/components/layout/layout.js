import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Header from '../Header'
import MainContent from '../MainContent'
import Footer from '../Footer'

//import global styles here only
import './global.scss'

//site wrapper
const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

// Extract Sass variables into a JS object
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

const Layout = ({ children, noHeader, noFooter }) => (
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
        <SiteWrapper>
          { noHeader
            ? null
            : <Header siteTitle={data.site.siteMetadata.title} />
          }
          <MainContent content={children} />
          { noFooter
            ? null
            : <Footer />
          }
        </SiteWrapper>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
