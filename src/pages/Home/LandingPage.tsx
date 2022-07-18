import { StatusBar } from 'expo-status-bar';
import { Container, ContainerButton, TheButton, BackgroundImage, ButtonText } from '../../styles/MainStyle';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { Image } from 'react-native';

import Background from '../../utils/background.png';

export default function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {};

  return (
    <Container>
      <BackgroundImage source={Background}>
        <ContainerButton>
          <TheButton onPress={() => navigation.navigate('Atendimento')}>
            <ButtonText>Gerar Atendimento</ButtonText>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Avliações</ButtonText>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Relatório</ButtonText>
          </TheButton>
        </ContainerButton>

        <StatusBar style="auto" />
      </BackgroundImage>
    </Container>
  );
}
