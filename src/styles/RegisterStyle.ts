import React from 'react';
import styled from 'styled-components/native';

interface BackgroundProps {
  children: React.ReactNode;
}

// interface InputProps {
//   onChangeText: React.Dispatch<React.SetStateAction<string>>;
//   value: string;
// }

export const BackgroundImage = styled.ImageBackground<BackgroundProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdressContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const Header = styled.Text`
  font-size: 60px;
  color: #01243c;
`;

export const ButtonText = styled.Text`
  color: #fff9f9;
`;

export const InputText = styled.Text`
  color: #01243c;
`;

export const TheButton = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: #01243c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const Input = styled.TextInput`
  border-color: black;

  width: 250px;
  height: 40px;
  margin: 2px;
  border-radius: 10px;
  background-color: #e9f4fb;
`;
