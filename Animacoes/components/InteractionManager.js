import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  InteractionManager,
} from 'react-native';

export default function TelaDetalhes() {

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Só carrega os dados depois de toda a navegação/animação terminar
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => setCarregando(false), 1500); // Simula um fetch pesado
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {carregando ? (
        <ActivityIndicator size="large" color="#e76f51" />
      ) : (
        <Text style={{ fontSize: 20 }}>Dados carregados! 🚀</Text>
      )}
      
    </View>
  );
}
