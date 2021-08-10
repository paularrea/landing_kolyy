const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/blogPost.js");
  const doggipediaPostTemplate = path.resolve(
    "src/templates/doggipediaPost.js"
  );
  const blog = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { type: { ne: "blog" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
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
    `
  );

  if (blog.errors) {
    throw result.errors;
  }

  const doggipedia = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { type: { ne: "doggipedia" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
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
    `
  );

  if (doggipedia.errors) {
    throw result.errors;
  }

  const doggipediaPosts = doggipedia.data.allMarkdownRemark.edges;

  doggipediaPosts.forEach((post, index) => {
    const previous =
      index === doggipediaPosts.length - 1
        ? null
        : doggipediaPosts[index + 1].node;
    const next = index === 0 ? null : doggipediaPosts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });


  const blogPosts = blog.data.allMarkdownRemark.edges;

  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: doggipediaPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    console.log("value", value);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
