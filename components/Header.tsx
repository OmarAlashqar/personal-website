import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

import NavItem from './NavItem';
import Logo from './Logo';

import data from '../cms/social';

const Header: React.FC = (props) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg="transparent"
    color="primary.700"
    {...props}
  >
    <Flex align="center">
      <Logo w="50px" />
    </Flex>

    <Box display="block">
      <Flex align="center" justify="flex-end" flexDir="row">
        <NavItem to={data.resumeURL} isLast>
          <Button
            size="sm"
            rounded="md"
            color="white"
            bg="primary.500"
            _hover={{
              bg: 'primary.600',
            }}
          >
            Résumé
          </Button>
        </NavItem>
      </Flex>
    </Box>
  </Flex>
);

export default Header;
