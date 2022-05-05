import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

import data from '../cms/hero';

const Index: React.FC = () => (
  <Layout
    title="Omar Alashqar | 👋"
    description="Find out more about me on my personal website"
  >
    <Hero imageURL={data.imageURL} title={data.title} body={data.body} />
  </Layout>
);

export default Index;
