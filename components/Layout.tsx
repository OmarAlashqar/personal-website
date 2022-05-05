import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Head from 'next/head';

import data from '../cms/hero';

interface LayoutProps {
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ title, description, ...props }) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: '1200px' }}
    m="0 auto"
    {...props}
  >
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/logo.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Open Graph Protocol - https://ogp.me/ */}
      <meta property="og:image" content={data.imageURL} key="ogimage" />
      <meta property="og:title" content={title} key="ogimage" />
      <meta property="og:description" content={description} key="ogimage" />
    </Head>
    <Header />
    {props.children}
  </Flex>
);

export default Layout;
