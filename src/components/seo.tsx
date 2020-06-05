import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title: string;
  lang: string;
  description?: string;
  meta?: any[];
}

const SEO: React.FC<Props> = ({ title, lang, description, meta }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `);

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang }}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'author',
          content: siteMetadata.author,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description || siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ].concat(meta || [])}
    ></Helmet>
  );
};

export default SEO;
