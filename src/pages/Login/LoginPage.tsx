import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, Text } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Container,
  ContainerButton,
  TheButton,
  Input,
  BackgroundImage,
  Header,
  ButtonText,
  InputText,
} from '../../styles/LoginStyle';
import Background from '../../utils/background.png';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

export default function LoginPage() {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {};

  return (
    <BackgroundImage source={Background}>
      <Container>
        <Header>Login</Header>
        <InputText> CPF </InputText>
        <Input keyboardType="phone-pad" onChangeText={onChangeText} value={text} />
        <InputText> Senha</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <ContainerButton>
          <TheButton onPress={handleOnPress}>
            <ButtonText>Entrar</ButtonText>
          </TheButton>
        </ContainerButton>
        <Text onPress={() => Linking.openURL('#')}>Recupere sua senha</Text>
        <Text onPress={() => Linking.openURL('#')}>Não possui uma conta? Cadastre-se!</Text>
      </Container>

      <StatusBar style="auto" />
    </BackgroundImage>
  );
}
