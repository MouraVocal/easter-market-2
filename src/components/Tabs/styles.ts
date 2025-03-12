import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const TabsContainer = styled.div`
  width: 100%;
  margin: ${theme.space.xl} 0;
`;

export const TabList = styled.div`
  display: flex;
  gap: ${theme.space.md};
  margin-bottom: ${theme.space.lg};
  border-bottom: 2px solid ${theme.colors.gray[200]};
`;

export const TabButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ active }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active }) => active ? theme.colors.primary : theme.colors.gray[600]};
  padding: ${theme.space.md};
  font-size: ${theme.fontSizes.lg};
  cursor: pointer;
  margin-bottom: -2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const TabPanel = styled.div<{ active?: boolean }>`
  display: ${({ active }) => active ? 'block' : 'none'};
`;