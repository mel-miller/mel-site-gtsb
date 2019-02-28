import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import ProjectLink from '../components/ProjectLink'

const ProjectCategories = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} />
    <h1>Projects</h1>
    <ProjectCategories>
      <ProjectLink
        name= "Development"
        icon="code"
        prefix="fas"
        text="Lorem ipsum dolor amet tote bag heirloom hot chicken, 8-bit authentic master cleanse asymmetrical truffaut vice wayfarers migas. Lomo aesthetic everyday carry drinking vinegar DIY taxidermy iPhone kinfolk, street art pork belly lumbersexual fingerstache gochujang. Wolf fam everyday carry irony, glossier seitan plaid vexillologist vice YOLO chambray kale chips tofu retro. Health goth coloring book woke cred leggings, adaptogen kogi la croix snackwave pug literally everyday carry occupy farm-to-table."
      />
      <ProjectLink
        name= "Design"
        icon="paint-brush"
        prefix="fas"
        text="Lorem ipsum dolor amet tote bag heirloom hot chicken, 8-bit authentic master cleanse asymmetrical truffaut vice wayfarers migas. Lomo aesthetic everyday carry drinking vinegar DIY taxidermy iPhone kinfolk, street art pork belly lumbersexual fingerstache gochujang. Wolf fam everyday carry irony, glossier seitan plaid vexillologist vice YOLO chambray kale chips tofu retro."
      />
      <ProjectLink
        name= "Photography"
        icon="camera"
        prefix="fas"
        text="Lorem ipsum dolor amet tote bag heirloom hot chicken, 8-bit authentic master cleanse asymmetrical truffaut vice wayfarers migas. Lomo aesthetic everyday carry drinking vinegar DIY taxidermy iPhone kinfolk, street art pork belly lumbersexual fingerstache gochujang. Wolf fam everyday carry irony, glossier seitan plaid vexillologist vice YOLO chambray kale chips tofu retro. Health goth coloring book woke cred leggings, adaptogen kogi la croix snackwave pug."
      />

    </ProjectCategories>
  </Layout>
)

export default ProjectsPage
