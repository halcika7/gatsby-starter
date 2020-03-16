import React, { FC } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: FC = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
);

export default IndexPage;
