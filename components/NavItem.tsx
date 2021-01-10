import React from 'react';
import { Text, Tooltip } from '@chakra-ui/react';

interface NavItemProps {
  isLast?: boolean;
  to?: string;
  tooltip?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  isLast = false,
  to = '/',
  tooltip,
  children,
  ...rest
}) => (
  <Tooltip label={tooltip}>
    <Text mr={isLast ? 0 : 2} display="block" {...rest}>
      <a href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Text>
  </Tooltip>
);

export default NavItem;
