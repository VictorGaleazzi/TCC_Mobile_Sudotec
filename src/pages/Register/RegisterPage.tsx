import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Container,
  ContainerButton,
  TheButton,
  Input,
  BackgroundImage,
  Header,
  ButtonText,
  InputText,
} from '../../styles/RegisterStyle';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import Background from '../../utils/background.png';

export default function RegisterPage() {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {};

  return (
    <Container>
      <BackgroundImage source={Background}>
        <Header>Atendimemto</Header>
        <InputText>Motivo do atendimento:</InputText>
        <Input onChangeText={onChangeText} value={text} />
        <InputText>Nome:</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <InputText>Sobrenome:</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <InputText>Rua:</InputText>
        <Input onChangeText={onChangeText} value={text} />
        <InputText>Bairro:</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <InputText>Número:</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <InputText>Local do atendimento:</InputText>
        <Input onChangeText={onChangeText} value={text} />
        <InputText>Descrição:</InputText>
        <Input onChangeText={onChangePassword} value={password} />

        <ContainerButton>
          <TheButton onPress={handleOnPress}>
            <ButtonText>Enviar atendimento</ButtonText>
          </TheButton>

          <TheButton onPress={() => navigation.navigate('Main')}>
            <ButtonText>Voltar à página inicial</ButtonText>
          </TheButton>
        </ContainerButton>

        <StatusBar style="auto" />
      </BackgroundImage>
    </Container>
  );
}
