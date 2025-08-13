import React, { useState } from 'react';
import { FlatList, RefreshControl, Text, View, StyleSheet } from 'react-native';

export default function ListaProdutos() {
  const [refreshing, setRefreshing] = useState(false);

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'iPhone 15', preco: 'R$ 7.999' },
    { id: 2, nome: 'MacBook Air', preco: 'R$ 12.999' },
    { id: 3, nome: 'AirPods Pro', preco: 'R$ 2.399' },
  ]);

  const atualizarPrecos = async () => {
    setRefreshing(true);

    // Simula atualização de preços com delay
    setTimeout(() => {
      setProdutos(prev =>
        prev.map(produto => ({
          ...produto,
          preco: `R$ ${(Math.random() * 10000 + 1000).toFixed(0)}`
        }))
      );
      setRefreshing(false);
    }, 1000);
  };

  const renderProduto = ({ item }) => (
    <View style={styles.produto}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </View>
  );

  return (
    <FlatList
      data={produtos}
      renderItem={renderProduto}
      keyExtractor={item => item.id.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={atualizarPrecos}
          colors={['#007AFF']} // Estilo azul para Android
          tintColor="#007AFF" // Estilo azul para iOS
          title="Atualizando preços..."
        />
      }
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  produto: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  preco: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
