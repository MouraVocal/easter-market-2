import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: ${theme.space.xl} 0;
  overflow: hidden;
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${theme.colors.primary};
  border: none;
  font-size: ${theme.fontSizes.xl};
  cursor: pointer;
  z-index: 1;
  color: ${theme.colors.white};
  width: 48px;
  height: 48px;
  border-radius: ${theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0.8;
  box-shadow: ${theme.shadows.md};
  
  &.prev {
    left: ${theme.space.lg};
  }
  
  &.next {
    right: ${theme.space.lg};
  }

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.05);
    background: ${theme.colors.secondary};
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: ${theme.fontSizes.lg};
    
    &:first-child {
      left: ${theme.space.md};
    }
    
    &:last-child {
      right: ${theme.space.md};
    }
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.space.sm};
  margin-top: ${theme.space.md};
`;

export const CarouselDot = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: ${theme.radii.full};
  background: ${({ active }) => active ? theme.colors.primary : theme.colors.gray[300]};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${({ active }) => active ? theme.colors.primary : theme.colors.gray[400]};
  }
`;