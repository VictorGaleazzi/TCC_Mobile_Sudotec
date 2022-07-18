import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, Text } from 'react-native';
import { useFonts } from 'expo-font';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import Background from '../../utils/background.png';
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

export default function LoginPage() {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <BackgroundImage source={Background}>
      <Container>
        <Header>Login</Header>
        <InputText> CPF </InputText>
        <Input keyboardType="phone-pad" onChangeText={onChangeText} value={text} />
        <InputText> Senha</InputText>
        <Input onChangeText={onChangePassword} value={password} />
        <ContainerButton>
          <TheButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Entrar</ButtonText>
          </TheButton>
        </ContainerButton>
        <Text onPress={() => Linking.openURL('#')}>Recupere sua senha</Text>

        <StatusBar />
      </Container>
    </BackgroundImage>
  );
}
