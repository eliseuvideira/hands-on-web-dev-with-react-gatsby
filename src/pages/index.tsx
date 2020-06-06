import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const BlogContainer = styled.div`
  display: flex;
  section {
    border-right: 1px solid lightgrey;
    flex: 0 0 65%;
    padding: 2em 2em 0 0;
  }

  @media (max-width: 991px) {
    display: block;
    section {
      border-right: none;
      padding-right: 0;
    }
  }
`;

const PostSummary = styled.div`
  margin-bottom: 2em;
  p:first-child {
    color: #a0a0a0;
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 1em;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  @media (max-width: 991px) {
    &:last-child {
      border-bottom: 1px solid lightgrey;
      margin-bottom: 0;
      padding-bottom: 3em;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Aside = styled.aside`
  flex: 0 0 35%;
  padding: 2em 2em 0;
  text-align: center;
  h3 {
    font-size: 20px;
    margin-bottom: 1em;
    margin-top: 2em;
  }

  @media (max-width: 991px) {
    padding-top: 3em;
    margin: auto;
    width: 90%;
  }

  @media (max-width: 640px) {
    aside {
      padding: 3em 0;
      width: 100%;
    }
  }
`;

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
    <BlogContainer>
      <section>
        {posts.map(({ node: post }: { node: any }) => (
          <PostSummary key={post.fields.slug}>
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
          </PostSummary>
        ))}
      </section>
      <Aside>
        <Image fluid={profilePic.childImageSharp.fluid} alt={author} />
        <h3>{author}</h3>
        <p>{bio}</p>
      </Aside>
    </BlogContainer>
  </Layout>
);

export default BlogIndex;
