import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const BalloonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.space.md};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray[300]};
  padding: ${theme.space.xs};
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${theme.colors.white};
  }
`;

export const BalloonText = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.md};
  line-height: 1.5;
  color: ${theme.colors.gray[100]};
`;

export const BalloonIcon = styled.span`
  font-size: ${theme.fontSizes.xl};
  margin-right: ${theme.space.sm};
`;