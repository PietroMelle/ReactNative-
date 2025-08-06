import { View, Image, PixelRatio, Text } from 'react-native';

export default function ImagemAjustada() {
  // Suponha que temos 2 versões da imagem: logo.png e logo@3x.png
  const densidade = PixelRatio.get();
  const source =
    densidade >= 3 ? require('./logo@3x.png') : require('./logo.png');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image source={source} style={{ width: 100, height: 100 }} />

      <Text>Densidade atual: {densidade}</Text>
      
    </View>
  );
}
