import { View, Button, Platform } from 'react-native';

export default function BotaoAdaptado() {

  const cor = Platform.select({
    ios: '#007AFF', // azul clássico do iOS
    android: '#2196F3', // azul Material do Android
    default: '#333', // web ou outro
  });

  return (
    <View style={{ marginTop: 50 }}>

      <Button
        title={
          Platform.OS === 'ios' ? 'Continuar no iOS' : 'Continuar no Android'
        }
        color={cor}
        onPress={() => alert('Você apertou!')}
      />
      
    </View>
  );
}
