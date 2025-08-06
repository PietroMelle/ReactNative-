import { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

export default function OrientacaoDinamica() {

  const [dimensao, setDimensao] = useState(Dimensions.get('window'));

  useEffect(() => {
    const atualizar = ({ window }) => setDimensao(window);
    const listener = Dimensions.addEventListener('change', atualizar);
    return () => listener.remove(); // Limpa na desmontagem!
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>
        Orientação: {dimensao.width > dimensao.height ? 'Paisagem' : 'Retrato'}
      </Text>

      <Text>
        Largura: {dimensao.width.toFixed(0)} | Altura:{' '}
        {dimensao.height.toFixed(0)}
      </Text>
      
    </View>
  );
}
