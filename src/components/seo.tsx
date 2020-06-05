import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  lang: string;
  description: string;
  meta?: any[];
}

const SEO: React.FC<Props> = ({ title, lang, description, meta }) => (
  <Helmet
    title={title}
    htmlAttributes={{ lang }}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ].concat(meta || [])}
  ></Helmet>
);

export default SEO;
