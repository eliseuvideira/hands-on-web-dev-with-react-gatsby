import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
        bio
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    profilePic: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

interface Props {
  data: {
    site: {
      siteMetadata: { title: string; author: string; bio: string };
    };
    profilePic: any;
    allMarkdownRemark: any;
  };
}

const BlogIndex: React.FC<Props> = ({
  data: {
    site: {
      siteMetadata: { title, author, bio },
    },
    profilePic,
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout title={title} subtitle="Built with React and Gatsby">
    <SEO title="All Posts" lang="en" description="An list of all posts" />
    <div className="blog-container">
      <section>
        {posts.map(({ node: post }: { node: any }) => (
          <div className="post-summary" key={post.fields.slug}>
            <p>{post.frontmatter.date}</p>
            <h2>{post.frontmatter.title}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: post.html.slice(0, 300).trim() + '...',
              }}
            />
            <Link to={post.fields.slug}>
              <button>Read more</button>
            </Link>
          </div>
        ))}
      </section>
      <aside>
        <Image fluid={profilePic.childImageSharp.fluid} alt={author} />
        <h3>{author}</h3>
        <p>{bio}</p>
      </aside>
    </div>
  </Layout>
);

export default BlogIndex;
