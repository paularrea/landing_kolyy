const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: "jQuery", // important: 'Q' capitalized
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");
    const doggipediaPostTemplate = path.resolve(
      "src/templates/doggipediaPost.js"
    );
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: ASC }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  title
                  tags
                  type
                }
              }
            }
          }
        }
      `).then((result) => {
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component:
              node.frontmatter.type === "blog"
                ? blogPostTemplate
                : doggipediaPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });
          resolve();
        });
      })
    );
  });
};
