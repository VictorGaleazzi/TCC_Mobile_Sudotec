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

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
export const ContainerEnderoco = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContainerNomeEnderoco = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin-bottom: 25px;
`;

export const Header = styled.Text`
  font-size: 50px;
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff9f9;
`;

export const InputText = styled.Text`
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
`;

export const InputTextEndereco = styled.Text`
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
  margin-right: 200px;
`;

export const InputTextEndereco2 = styled.Text`
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
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
  padding: 10px;
  width: 325px;
  height: 40px;
  margin: 6px;
  border-radius: 20px;
  background-color: #e9f4fb;
`;

export const InputBairro = styled.TextInput`
  border-color: black;
  padding: 10px;
  width: 235px;
  height: 40px;
  margin: 6px;
  border-radius: 20px;
  background-color: #e9f4fb;
`;

export const InputNumero = styled.TextInput`
  border-color: black;
  padding: 10px;
  width: 75px;
  height: 40px;
  margin: 6px;
  border-radius: 20px;
  background-color: #e9f4fb;
`;

export const InputDescricao = styled.TextInput`
  border-color: black;
  padding: 10px;
  width: 325px;
  height: 125px;
  margin: 6px;
  border-radius: 20px;
  background-color: #e9f4fb;
  margin-bottom: 50px;
`;

export const DivInputs = styled.View `
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
