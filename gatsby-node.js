const path = require("path");

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  if (typeof window !== `undefined`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            jquery: "jQuery",
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: false,
        stream: false,
        path: false,
      },
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
                  intro
                  tags
                  type
                  pelo
                  peso
                  aseo
                }
              }
            }
          }
        }
      `).then((result) => {
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          const type = node.frontmatter.type
          createPage({
            path,
            component:
              type === "blog"
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
