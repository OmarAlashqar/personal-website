import React from 'react';
import { Icon } from '@chakra-ui/react';
import customTheme from '../utils/theme';

interface LogoProps {
  fill?: string;
  [x: string]: any;
}

const Logo: React.FC<LogoProps> = ({
  fill = customTheme.colors.primary[500],
  ...props
}) => (
  <Icon viewBox="0 0 128 128" w="100%" h="100%" {...props}>
    <circle cx="64" cy="64" r="27.5" fill={fill} />
    <path
      fill={fill}
      d="M64,25a39,39,0,1,0,39,39A39.05,39.05,0,0,0,64,25Zm0,72.5A33.5,33.5,0,1,1,97.5,64,33.54,33.54,0,0,1,64,97.5ZM64,25a39,39,0,1,0,39,39A39.05,39.05,0,0,0,64,25Zm0,72.5A33.5,33.5,0,1,1,97.5,64,33.54,33.54,0,0,1,64,97.5ZM64,0a64,64,0,1,0,64,64A64,64,0,0,0,64,0Zm0,120.5A56.5,56.5,0,1,1,120.5,64,56.57,56.57,0,0,1,64,120.5Zm0-107A50.5,50.5,0,1,0,114.5,64,50.55,50.55,0,0,0,64,13.5ZM64,109a45,45,0,1,1,45-45A45.05,45.05,0,0,1,64,109Zm0-84a39,39,0,1,0,39,39A39.05,39.05,0,0,0,64,25Zm0,72.5A33.5,33.5,0,1,1,97.5,64,33.54,33.54,0,0,1,64,97.5Z"
    />
  </Icon>
);

export default Logo;
