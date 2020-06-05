import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const About: React.FC = () => (
  <Layout title="Starter Blog" subtitle="Built with React and Gatsby">
    <SEO title="About Me" description="Get to know more about me" lang="en" />
    <div>
      <p>About Page</p>
      <p>
        Go to <Link to="/">Home Page</Link>
      </p>
    </div>
  </Layout>
);

export default About;
