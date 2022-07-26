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

export const ButtonSpace = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
`;

export const ButtonText = styled.Text`
  color: #00233a;
`;

export const TheButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 80px;
  background-color: #4180ab;
  display: flex;
  flex-direction: row;
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

export const ImageButton = styled.Image`
  height: 80px;
  width: 80px;
`;
