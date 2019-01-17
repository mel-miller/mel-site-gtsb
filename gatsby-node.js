const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  // generate pages from markdown files
  const { createPage } = actions;

  const resumeTemplate = path.resolve('./src/templates/resume.js');
  const postTemplate = path.resolve('./src/templates/post.js')

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                pagetype
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.pagetype === "resume") {
          createPage({
            path: node.frontmatter.slug,
            component: resumeTemplate,
            context: {
              slug: node.frontmatter.slug,
            }
          });
        } else {
          createPage({
            path: node.frontmatter.slug,
            component: postTemplate,
            context: {
              slug: node.frontmatter.slug,
            }
          });
        }
      })
      resolve();
    })
  });


  //create redirects for Netlify site
  const { createRedirect } = actions;
  createRedirect({ fromPath: "https://mel-miller.netlify.com/*", toPath: "https://mel-miller.com/:splat", isPermanent: true, force: true });

}
