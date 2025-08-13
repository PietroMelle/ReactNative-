import React, { useState } from 'react';
import { ScrollView, RefreshControl, Text, View } from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simula carregamento
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={{ padding: 20 }}>
        <Text>Puxe para baixo para atualizar! 👇</Text>
      </View>
    </ScrollView>
  );
}
