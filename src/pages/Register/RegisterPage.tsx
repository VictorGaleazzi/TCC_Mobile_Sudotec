import { useRef } from 'react';
import { ScrollView, Text } from 'react-native';
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
  InputBairro,
  InputNumero,
  InputDescricao,
  ContainerEnderoco,
  ContainerNomeEnderoco,
  InputTextEndereco,
  InputTextEndereco2
} from '../../styles/RegisterStyle';

import Background from '../../utils/imagem/imagemfundo.png';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function RegisterPage() {
  const userSchema = Yup.object().shape({
    nome: Yup.string().required('Error: O campo nome é obtigatório!'),
    sobrenome: Yup.string().required('Error: O campo Sobrenome é obtigatório'),
    rua: Yup.string().required('Error: O campo Rua é obrigatório!'),
    bairro: Yup.string().required('Error: O campo Bairro é obrigatório!'),
    numero: Yup.number().max(6, 'Numero muito Longo'),
    localAtendimento: Yup.string().required('Error: O campo Local de Atendimento é obrigatório!'),
    descricao: Yup.string(),
  });

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
  <ScrollView>
    <Container>
      <Formik
        initialValues={{ nome: '', sobrenome: '', rua: '', bairro: '', numero: '', localAtendimento: '', descricao: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <BackgroundImage source={Background}>

            <Header>Atendimento</Header>

            <InputText>Nome:</InputText>
            <Input
              onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                value={values.nome}
                placeholder="Nome:"
                placeholderTextColor="rgb(220, 220, 220)"
            />
            <InputText>Sobrenome:</InputText>
            <Input
                onChangeText={handleChange('sobrenome')}
                onBlur={handleBlur('sobrenome')}
                value={values.sobrenome}
                placeholder="Sobrenome:"
                placeholderTextColor="rgb(220, 220, 220)"
            />
            <InputText>Rua:</InputText>
            <Input
                onChangeText={handleChange('rua')}
                onBlur={handleBlur('rua')}
                value={values.rua}
                placeholder="Rua:"
                placeholderTextColor="rgb(220, 220, 220)"
            />
            <ContainerNomeEnderoco>
            <InputTextEndereco>Bairro:</InputTextEndereco>
            <InputTextEndereco2>Número:</InputTextEndereco2>
            </ContainerNomeEnderoco>
              <ContainerEnderoco>

                  <InputBairro
                    onChangeText={handleChange('bairro')}
                    onBlur={handleBlur('bairro')}
                    value={values.bairro}
                    placeholder="Bairro:"
                    placeholderTextColor="rgb(220, 220, 220)"
                  />
                  <InputNumero
                      onChangeText={handleChange('numero')}
                      onBlur={handleBlur('numero')}
                      value={values.numero}
                      placeholder="Número:"
                      placeholderTextColor="rgb(220, 220, 220)"
                  />
              </ContainerEnderoco>
            <InputText>Local do atendimento:</InputText>
            <Input
                onChangeText={handleChange('localAtendimento')}
                onBlur={handleBlur('localAtendimento')}
                value={values.localAtendimento}
                placeholder="Local Atendimento:"
                placeholderTextColor="rgb(220, 220, 220)"
            />
            <InputText>Descrição:</InputText>
            <InputDescricao
                onChangeText={handleChange('descricao')}
                onBlur={handleBlur('descricao')}
                value={values.descricao}S
            />
            <ContainerButton>
              <TheButton onPress={handleSubmit} title="Submit">
                <ButtonText>Enviar atendimento</ButtonText>
              </TheButton>

              <TheButton onPress={() => navigation.navigate('Home')}>
                <ButtonText>Voltar à página inicial</ButtonText>
              </TheButton>
            </ContainerButton>


        </BackgroundImage>
        )}
      </Formik>
    </Container>
  </ScrollView>
  );
}
