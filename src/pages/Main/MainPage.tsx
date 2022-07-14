import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { Container, ContainerButton, TheButton, BackgroundImage } from '../../styles/GeneralStyle';

import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import Background from '../../utils/background.png';

export default function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {};

  return (
    <Container>
      <BackgroundImage source={Background}>
        <ContainerButton>
          <TheButton onPress={handleOnPress}>
            <Text>Sign Up</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Login')}>
            <Text>Previous Page</Text>
          </TheButton>
          <TheButton onPress={() => navigation.navigate('Calendar')}>
            <Text>Next Page</Text>
          </TheButton>
        </ContainerButton>

        <StatusBar style="auto" />
      </BackgroundImage>
    </Container>
  );
}
