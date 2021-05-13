// import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
// import React from "react";
// import Layout from "../components/layout/layout"

// export default function PostPage({ data }) {
//   const {
//     body,
//     frontmatter: { title },
//   } = data.mdx;
//   return (
//     <>
//       <Layout>
//         <div>{title}</div>
//         <MDXRenderer>{body}</MDXRenderer>
//       </Layout>
//     </>
//   );
// }

// export const query = graphql`
//   query POST_BY_SLUG($slug: String) {
//     mdx(slug: { eq: $slug }) {
//       id
//       slug
//       body
//       frontmatter {
//         date
//         title
//       }
//     }
//   }
// `;
