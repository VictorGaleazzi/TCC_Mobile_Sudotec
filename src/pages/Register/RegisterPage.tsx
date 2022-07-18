import { useRef } from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
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

import Background from '../../utils/background.png';

export default function RegisterPage() {
  const InputsRef = useRef({
    name: '',
    lastname: '',
    Rua: '',
    Bairro: '',
    Numero: 0,
    LocalAtendimento: '',
    Descricao: '',
  });

  type FieldKeys = keyof typeof InputsRef.current;

  const handleOnChangeTextInput = (v: string, field: FieldKeys) => {
    InputsRef.current = {
      ...InputsRef.current,
      [field]: v,
    };
  };

  function MostraInfo() {
    console.log(
      `Atendimento Enviado:` +
        `\n` +
        `Nome: ${InputsRef.current.name}\n` +
        `Sobrenome: ${InputsRef.current.lastname}\n` +
        `Local de Atendimento: ${InputsRef.current.LocalAtendimento}\n` +
        `Rua: ${InputsRef.current.Rua}\n` +
        `Bairro: ${InputsRef.current.Bairro}\n` +
        `Número: ${InputsRef.current.Numero}\n` +
        `Descrição: ${InputsRef.current.Descricao}\n`,
    );
  }
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackgroundImage source={Background}>
        <ScrollView>
          <Header>Atendimento</Header>
          <InputText>Motivo do atendimento:</InputText>

          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'name')}
            placeholder="Nome:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Sobrenome:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'lastname')}
            placeholder="Sobrenome:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Rua:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'Rua')}
            placeholder="Rua:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Bairro:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'Bairro')}
            placeholder="Bairro:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Número:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'Numero')}
            placeholder="Número:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Local do atendimento:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'LocalAtendimento')}
            placeholder="Local Atendimento:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <InputText>Descrição:</InputText>
          <Input
            onChangeText={v => handleOnChangeTextInput(v, 'Descricao')}
            placeholder="Descrição:"
            defaultValue=""
            placeholderTextColor="rgb(220, 220, 220)"
          />

          <ContainerButton>
            <TheButton onPress={MostraInfo}>
              <ButtonText>Enviar atendimento</ButtonText>
            </TheButton>

            <TheButton onPress={() => navigation.navigate('Home')}>
              <ButtonText>Voltar à página inicial</ButtonText>
            </TheButton>
          </ContainerButton>
        </ScrollView>
      </BackgroundImage>
    </Container>
  );
}
