import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.space.md};
  box-sizing: border-box;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.space.lg};
  margin: ${theme.space.xl} 0;
`;

export const ProductCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  padding: ${theme.space.md};
  box-shadow: ${theme.shadows.md};
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Button = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.radii.md};
  padding: ${theme.space.sm} ${theme.space.md};
  font-size: ${theme.fontSizes.md};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export const WhatsAppButton = styled(Button)`
  position: fixed;
  bottom: ${theme.space.xl};
  right: ${theme.space.xl};
  background: #25D366;
  border-radius: ${theme.radii.full};
  padding: ${theme.space.md};
  display: flex;
  align-items: center;
  gap: ${theme.space.sm};
  
  &:hover {
    background: #128C7E;
  }
`;

export const WhatsAppBalloon = styled.div`
  position: fixed;
  bottom: calc(${theme.space.xl} * 2 + 48px);
  right: ${theme.space.xl};
  background: ${theme.colors.gray[800]};
  color: ${theme.colors.white};
  padding: ${theme.space.md};
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.lg};
  max-width: 250px;
  z-index: 1000;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${theme.colors.gray[800]};
  }
`;

export const CartButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.space.sm};
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.full};
  padding: 2px 6px;
  font-size: ${theme.fontSizes.xs};
  font-weight: bold;
`;

export const PageTitle = styled.h1`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: ${theme.space.lg};
  text-align: center;
`;

export const PageSubtitle = styled.h2`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes['2xl']};
  margin-bottom: ${theme.space.xl};
  text-align: center;
  font-weight: normal;
`;

export const AppContainer = styled.div`
  background: #F0F9FF;
  min-height: 100vh;
`;