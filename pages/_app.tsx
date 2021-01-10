import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/global.scss';
import customTheme from '../utils/theme';

const _app = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default _app;
