import React from 'react';
import ReactMarkdown from 'react-markdown';
import { AiFillMail } from 'react-icons/ai';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Icon,
} from '@chakra-ui/react';

import data from '../cms/social';
import NavItem from './NavItem';

interface HeroProps {
  title: string;
  body: string;
  imageURL: string;
  [x: string]: any;
}

const HeroButton: React.FC = ({ children }) => (
  <Button
    colorScheme="primary"
    borderRadius="8px"
    py="4"
    px="4"
    lineHeight="1"
    size="md"
  >
    {children}
  </Button>
);

const Hero: React.FC<HeroProps> = ({
  title,
  body,
  imageURL,
  ...rest
}: HeroProps) => (
  <Flex
    align="center"
    justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
    direction={{ base: 'column-reverse', md: 'row' }}
    wrap="nowrap"
    minH="70vh"
    px={8}
    mb={16}
    {...rest}
  >
    <Stack
      spacing={4}
      w={{ base: '80%', md: '40%' }}
      align={['center', 'center', 'flex-start', 'flex-start']}
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {title}
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        <ReactMarkdown>{body}</ReactMarkdown>
      </Heading>

      <Flex align="center" justify="center" flexDir="row" mt="20px">
        <NavItem to={data.resumeURL}>
          <HeroButton>Résumé</HeroButton>
        </NavItem>

        <NavItem to={`mailto:${data.email}`} isLast>
          <HeroButton>Get in touch</HeroButton>
        </NavItem>
      </Flex>
    </Stack>

    <Flex
      w={{ base: '80%', sm: '60%', md: '50%' }}
      mb={{ base: 10, md: 0 }}
      flexDir="column"
    >
      <Box w={{ base: '80%', md: '60%' }} m="auto">
        <Image src={imageURL} size="100%" rounded="1rem" shadow="2xl" />
      </Box>

      <Flex align="center" justify="center" flexDir="row" mt="20px">
        {data.links.map((d) => (
          <NavItem key={d.tooltip} to={d.href} tooltip={d.tooltip}>
            <Icon fill="dark" as={d.icon} w={8} h={8}></Icon>
          </NavItem>
        ))}

        <NavItem to={`mailto:${data.email}`} tooltip="Email" isLast>
          <Icon fill="dark" as={AiFillMail} w={8} h={8}></Icon>
        </NavItem>
      </Flex>
    </Flex>
  </Flex>
);

export default Hero;
