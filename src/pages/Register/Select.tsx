import RNPickerSelect  from  'react-native-picker-select';
import React, { View, Text } from 'react-native';


export const DropDown = () => {

  return (
    <View>
      <RNPickerSelect placeholder={{label: 'Selecione o Movito do atendimento:', value: null }} onValueChange={(Value) => console.log( Value )}
      items = {[
        {label: 'Algum tipo de benefício', value:'Algum tipo de benefício'},
        {label: 'Conflito Familiar', value: 'Conflito Familiar'},
        {label: 'Cadastro Unico', value: 'Cadastro Unico'},
        {label: 'Acompanhamento Psicossocial', value: 'Acompanhamento Psicossocial'},
        {label: 'Outra(Especificar)', value: 'Outra(Especificar)'}
      ]}
      />
  </View>
  )

}

