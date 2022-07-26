import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { BackgroundImage } from '../../styles/GeneralStyle';
import Background from '../../assets/background.png';
import { Container, ContainerButton, Header, TheButton } from '../../styles/SelectLanguage';

export default function LanguagePage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackgroundImage source={Background}>
        <Header>Traduza Seu Aplicativo</Header>
        <ContainerButton>
          <TheButton onPress={() => navigation.navigate('Login')}>
            <Text>Traduzir para Portugues</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Login')}>
            <Text>Traduzir para Espanhol</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Login')}>
            <Text>Traduzir para Japonês</Text>
          </TheButton>
        </ContainerButton>

        <StatusBar />
      </BackgroundImage>
    </Container>
  );
}
