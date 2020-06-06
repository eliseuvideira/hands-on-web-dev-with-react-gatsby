/* eslint-disable */
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const PostComponent = require.resolve('./src/templates/post.tsx');
  const query = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const posts = query.data.allMarkdownRemark.edges;
  for (const [index, post] of posts.entries()) {
    const slug = post.node.fields.slug;
    const previous = posts[index - 1] || null;
    const next = posts[index + 1] || null;
    createPage({
      component: PostComponent,
      path: post.node.fields.slug,
      context: {
        slug,
        previous,
        next,
      },
    });
  }
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
