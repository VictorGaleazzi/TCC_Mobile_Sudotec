import React from 'react';
import styled from 'styled-components/native';

interface BackgroundProps {
  children: React.ReactNode;
}

export const BackgroundImage = styled.ImageBackground<BackgroundProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
