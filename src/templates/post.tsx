import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const PostTemplate: React.FC<any> = ({
  data: {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: { title, subtitle, description, date },
    },
  },
  pageContext: { previous, next },
}) => (
  <Layout title={title} subtitle={subtitle}>
    <SEO title={title} lang="en" description={description || excerpt} />
    <section className="posts">
      <p className="date">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ul>
        <li className="post-navigation">
          {previous && (
            <Link to={previous.node.fields.slug} rel="prev">
              {previous.node.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="post-navigation">
          {next && (
            <Link to={next.node.fields.slug} rel="next">
              {next.node.frontmatter.title}
            </Link>
          )}
        </li>
      </ul>
    </section>
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        description
      }
    }
  }
`;
