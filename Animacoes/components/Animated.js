import React, { useRef } from 'react';
import { View, Button, Animated } from 'react-native';

export default function SlideEntrando() {

  const esquerda = useRef(new Animated.Value(-200)).current;
  const opacidade = useRef(new Animated.Value(0)).current;

  function animarTudo() {
    Animated.parallel([
      Animated.spring(esquerda, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacidade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Animated.View
        style={{
          transform: [{ translateX: esquerda }],
          opacity: opacidade,
          backgroundColor: '#e76f51',
          width: 120,
          height: 120,
          borderRadius: 15,
        }}
      />

      <Button title="Faz a mágica!" onPress={animarTudo} />
      
    </View>
  );
}
