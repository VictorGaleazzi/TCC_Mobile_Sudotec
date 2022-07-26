import { StatusBar } from 'expo-status-bar';
import { Linking, Text } from 'react-native';
import { Formik, getIn } from 'formik';
import * as yup from 'yup';
import i18n from 'i18n-js';

import { BackgroundImage } from '../../styles/GeneralStyle';
import { selectLocale } from '../../translation/translation';
import Background from '../../assets/imagem/imagemfundo.png';

import { Container, ContainerButton, TheButton, Input, Header, ButtonText, InputText } from '../../styles/LoginStyle';

selectLocale();

export default function LoginPage() {
  const loginValidationSchema = yup.object().shape({
    user: yup.string().required().max(20),
    password: yup
      .string()
      .required()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        '8 caracteres, uma maiúscula, um número e um caracter especial',
      ),
  });

  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        outline: 'none',
      };
    }
  }

  return (
    <Formik
      initialValues={{ user: '', password: '' }}
      validateOnMount
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <BackgroundImage source={Background}>
          <Container>
            <Header>{i18n.t('Login')}</Header>
            <InputText>{i18n.t('Usuário')}</InputText>
            <Input
              style={getStyles(errors, 'user')}
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              isValid={!(errors.user && touched.user)}
            />
            {errors.user && touched.user && <Text> {errors.user} </Text>}
            <InputText>{i18n.t('Senha')}</InputText>
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
                <ButtonText>{i18n.t('Entrar')}</ButtonText>
              </TheButton>
            </ContainerButton>
            <Text onPress={() => Linking.openURL('#')}>{i18n.t('RecuperarSenha')}</Text>

            <StatusBar />
          </Container>
        </BackgroundImage>
      )}
    </Formik>
  );
}
