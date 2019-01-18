const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  // generate pages from markdown files
  const { createPage } = actions;

  const resumeTemplate = path.resolve('./src/templates/Resume.js');
  const postTemplate = path.resolve('./src/templates/Post.js');

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
        const pageSlug = node.frontmatter.slug;

        if(node.frontmatter.pagetype === "resume") {
          createPage({
            path: pageSlug,
            component: resumeTemplate,
            context: {
              slug: pageSlug,
            }
          });
        } else {
          createPage({
            path: pageSlug,
            component: postTemplate,
            context: {
              slug: pageSlug,
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
