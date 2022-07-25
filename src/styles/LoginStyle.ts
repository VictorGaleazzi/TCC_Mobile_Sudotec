import React from 'react';
import styled from 'styled-components/native';

interface BackgroundProps {
  children: React.ReactNode;
}

interface InputProps {
  isValid: boolean;
}

export const Container = styled.View`
  background-color: #4180ab;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 450px;
  font-family: system-ui;
  border-radius: 50px;
`;

export const BackgroundImage = styled.ImageBackground<BackgroundProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 10px;
`;

export const Header = styled.Text`
  font-size: 60px;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
`;

export const InputText = styled.Text`
  color: white;
  margin: 10px 210px 0 0;
  font-weight: bold;
`;

export const TheButton = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: #00233a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const Input = styled.TextInput<InputProps>`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => (props.isValid ? 'white' : 'red')};

  &:focus,
  &:focus-visible {
    outline: none !important;
  }
`;
