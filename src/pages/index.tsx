import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

interface Props {
  data: {
    site: {
      siteMetadata: { title: string; author: string };
    };
  };
}

const BlogIndex: React.FC<Props> = ({
  data: {
    site: {
      siteMetadata: { title, author },
    },
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
        <p>We&apos;ll put a profile pic here later</p>
        <h3>{author}</h3>
        <p>
          Goat gouda who moved my cheese. Red leicester edam port-salut cream
          cheese pepper jack halloumi jarlsberg mozzarella. Boursin cheese
          strings manchego bocconcini croque monsieur cheese slices the big
          cheese fromage.
        </p>
      </aside>
    </div>
  </Layout>
);

export default BlogIndex;
