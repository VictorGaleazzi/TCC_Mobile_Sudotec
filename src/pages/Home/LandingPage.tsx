import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import { Container, ContainerButton, TheButton, BackgroundImage, ButtonText } from '../../styles/MainStyle';

import Background from '../../utils/background.png';

export default function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackgroundImage source={Background}>
        <ContainerButton>
          <TheButton onPress={() => navigation.navigate('Atendimento')}>
            <ButtonText>Gerar Atendimento</ButtonText>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Avaliações</ButtonText>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Relatório</ButtonText>
          </TheButton>
        </ContainerButton>
      </BackgroundImage>
    </Container>
  );
}
