import React from 'react';
import styled from 'styled-components/native';

interface InputProps {
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const Header = styled.Text`
  font-size: 50px;
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
`;

export const TheButton = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: #1ea5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const Input = styled.TextInput<InputProps>`
  border-color: black;
  border-width: 2px;
  width: 250px;
  height: 40px;
  margin: 2px;
  border-radius: 10px;
  background-color: white;
`;
