import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Container, ContainerButton, BackgroundImage, Header, TheButton } from '../../styles/GeneralStyle';
import Background from '../../utils/background.png';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

export default function LandingPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackgroundImage source={Background}>
        <Header>Bem vindo</Header>
        <ContainerButton>
          <TheButton onPress={() => navigation.navigate('Login')}>
            <Text>Login Page</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Register')}>
            <Text>Register Page</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Calendar')}>
            <Text>Calendar</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Main')}>
            <Text>Main</Text>
          </TheButton>
        </ContainerButton>

        <StatusBar style="auto" />
      </BackgroundImage>
    </Container>
  );
}
