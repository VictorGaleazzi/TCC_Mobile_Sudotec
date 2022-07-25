import { StatusBar } from 'expo-status-bar';
import { Linking, Text } from 'react-native';
import { Formik, getIn } from 'formik';
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

import Background from '../../utils/imagem/imagemfundo.png';

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

yup.setLocale(pt);

export default function LoginPage() {
  const loginValidationSchema = yup.object().shape({
    cpf: yup.string().required().length(14),
    password: yup.string().required().min(8).matches('8 caracteres, uma maiúscula, um número e um caracter especial'),
  });

  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        // outline: 'none',
      };
    }
  }

  return (
    <Formik
      initialValues={{ cpf: '', password: '' }}
      validateOnMount
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <BackgroundImage source={Background}>
          <Container>
            <Header>Login</Header>
            <InputText> CPF </InputText>
            <Input
              style={getStyles(errors, 'cpf')}
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
              isValid={!(errors.cpf && touched.cpf)}
            />
            {errors.cpf && touched.cpf && <Text> {errors.cpf} </Text>}
            <InputText> Senha</InputText>
            <Input
              style={getStyles(errors, 'password')}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              isValid={!(errors.password && touched.password)}
            />
            {errors.password && touched.password && <Text> {errors.password} </Text>}
            <ContainerButton>
              <TheButton onPress={() => handleSubmit()}>
                <ButtonText>Entrar</ButtonText>
              </TheButton>
            </ContainerButton>
            <Text onPress={() => Linking.openURL('#')}>Recupere sua senha</Text>

            <StatusBar />
          </Container>
        </BackgroundImage>
      )}
    </Formik>
  );
}
