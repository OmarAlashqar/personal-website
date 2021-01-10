import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Head from 'next/head';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, ...props }) => (
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
    </Head>
    <Header />
    {props.children}
  </Flex>
);

export default Layout;
