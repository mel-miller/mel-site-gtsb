import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import ProjectLink from '../components/ProjectLink'


const ProjectCategories = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 720px) {
    display: block;
  }

`

const DevelopmentText =
  <>
    <p>Code examples from public repositories can be found on my <a href="https://github.com/mel-miller" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
        <p>Additional examples are available <a href="mailto:miller.2676@gmail.com?subject=Development Work">upon request</a>.</p>
  </>;

const DesignText =
  <>
    <p>Check out my<a href="https://www.behance.net/MILLER2676e7fa" target="_blank" rel="noopener noreferrer"> Behance profile </a> for various examples of web and graphic design.</p>
    <p>Additional examples are available <a href="mailto:miller.2676@gmail.com?subject=Design Work">upon request</a>.</p>
  </>;

const PhotoText =
  <>
    <p>My <a href="https://melissamiller.photoshelter.com" target="_blank" rel="noopener noreferrer"> Photography Website </a> contains a partial archive of my photography artwork.</p>
    <p>I also have a <a href="https://www.behance.net/gallery/76793947/Photojournalism" target="_blank" rel="noopener noreferrer"> Photojournalism Portfolio </a> from my past life as a photojournalist.</p>
  </>;


const ProjectsPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} />
    <h1>Projects</h1>
    <ProjectCategories>
      <ProjectLink
        name= "Development"
        icon="code"
        prefix="fas"
        text={DevelopmentText}
      />
      <ProjectLink
        name= "Design"
        icon="paint-brush"
        prefix="fas"
        text={DesignText}
      />
      <ProjectLink
        name= "Photography"
        icon="camera"
        prefix="fas"
        text={PhotoText}
      />

    </ProjectCategories>
  </Layout>
)

export default ProjectsPage
