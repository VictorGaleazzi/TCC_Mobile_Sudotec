import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const Header = styled.Text`
  font-size: 50px;
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: #fff9f9;
`;

export const InputText = styled.Text`
  color: #01243c;
  font-family: Arial;
  font-weight: bold;
`;

export const TheButton = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: #01243c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const Input = styled.TextInput`
  border-color: black;
  padding: 10px;
  width: 250px;
  height: 40px;
  margin: 6px;
  border-radius: 10px;
  background-color: #e9f4fb;
`;
