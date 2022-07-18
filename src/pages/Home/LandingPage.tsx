import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  ContainerButton,
  TheButton,
  BackgroundImage,
  ButtonText,
  ImageButton,
  ButtonSpace,
} from '../../styles/MainStyle';

import Background from '../../utils/background.png';
import Imagem1 from '../../utils/atendimento.png';
import Imagem2 from '../../utils/avaliação.png';
import Imagem3 from '../../utils/relatório.png';

export default function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackgroundImage source={Background}>
        <ContainerButton>
          <ButtonSpace>
            <TheButton onPress={() => navigation.navigate('Atendimento')}>
              <ImageButton source={Imagem1} />
            </TheButton>
            <ButtonText>Gerar Atendimento</ButtonText>
          </ButtonSpace>
          <ButtonSpace>
            <TheButton onPress={() => navigation.navigate('Home')}>
              <ImageButton source={Imagem2} />
            </TheButton>
            <ButtonText>Avaliações</ButtonText>
          </ButtonSpace>
          <ButtonSpace>
            <TheButton onPress={() => navigation.navigate('Home')}>
              <ImageButton source={Imagem3} />
            </TheButton>
            <ButtonText>Relatórios</ButtonText>
          </ButtonSpace>
        </ContainerButton>
      </BackgroundImage>
    </Container>
  );
}
