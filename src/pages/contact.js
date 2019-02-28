import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} />
    <h1>Contact</h1>
    Drop me a line at <a href="mailto:miller.2676@gmail.com">miller.2676@gmail.com</a>.
  </Layout>
)

export default ContactPage
