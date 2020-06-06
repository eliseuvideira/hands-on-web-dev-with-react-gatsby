import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
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
  };
}

const BlogIndex: React.FC<Props> = ({
  data: {
    site: {
      siteMetadata: { title, author, bio },
    },
    profilePic,
  },
}) => (
  <Layout title={title} subtitle="Built with React and Gatsby">
    <SEO title="All Posts" lang="en" description="An list of all posts" />
    <div className="blog-container">
      <section>
        <div className="post-summary">
          <p>May 4th, 2019</p>
          <h2>Cheddar cheese and biscuits</h2>
          <p>
            Cheese and wine rubber cheese airedale cottage cheese the big cheese
            stinking bishop cheesecake st. agur blue cheese. Cow rubber cheese
            cheese triangles say cheese cheese on toast cheddar red leicester
            swiss.{' '}
          </p>
          <button>Read more</button>
        </div>
        <div className="post-summary">
          <p>May 13th, 2019</p>
          <h2>Cheese on toast babybel babybel</h2>
          <p>
            Pecorino fondue manchego who moved my cheese babybel hard cheese
            fromage roquefort. Roquefort port-salut cheeseburger cheese on toast
            jarlsberg red leicester chalk and cheese fromage.
          </p>
          <button>Read more</button>
        </div>
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
