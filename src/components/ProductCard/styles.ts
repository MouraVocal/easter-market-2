import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space.md};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: ${theme.radii.md};
  margin-bottom: ${theme.space.md};
`;

export const ProductTitle = styled.h3`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.space.sm};
`;

export const ProductPrice = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSizes.md};
  margin: ${theme.space.sm} 0;
`;