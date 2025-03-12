import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { theme } from '@/styles/theme';

export const NavigationList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  color: ${theme.colors.text};
`;