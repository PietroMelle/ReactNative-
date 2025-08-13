import React, { useState } from 'react';
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AppCompleto() {
  const [refreshing, setRefreshing] = useState(false);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(new Date());
  const [dados, setDados] = useState(['Meme Inicial 😄']);
  const [erro, setErro] = useState(null);

  const onRefresh = async () => {
    if (refreshing) return; // evita múltiplos refreshs

    setRefreshing(true);
    setErro(null);

    try {
      // Simula uma chamada real de API
      const response = await simularAPI();
      if (response.success) {
        setDados(response.data);
        setUltimaAtualizacao(new Date());
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setErro('Ops! Algo deu errado. Tente novamente.');
      Alert.alert('Erro', 'Não foi possível atualizar os memes.');
    } finally {
      setRefreshing(false);
    }
  };

  // Simula API com chance de erro
  const simularAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sucesso = Math.random() > 0.5; // 70% de chance de sucesso
        if (sucesso) {
          resolve({
            success: true,
            data: [ ...dados,
              `Novo meme super engraçado #${Math.floor(Math.random() * 1000)}`,
            ],
          });
        } else {
          resolve({
            success: false,
            message: 'Servidor indisponível',
          });
        }
      }, 2000);
    });
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#FF6B6B', '#4ECDCA', '#45B7D1']}
          tintColor="#FF6B6B"
          title="Sincronizando novos Memes..."
          titleColor="#666"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.titulo}>Feed de Memes 🤣</Text>
        <Text style={styles.ultimaAtualizacao}>
          Última atualização: {ultimaAtualizacao.toLocaleTimeString()}
        </Text>
      </View>

      {erro && (
        <View style={styles.erro}>
          <Text style={styles.textoErro}>{erro}</Text>
        </View>
      )}

      {dados.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.textoItem}>{item}</Text>
        </View>
      ))}

      <View style={styles.dica}>
        <Text style={styles.textoDica}>
          Dica: Sempre use `useCallback` para evitar re-renderizações desnecessárias!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  ultimaAtualizacao: {
    fontSize: 14,
    color: '#6c757d',
  },
  erro: {
    backgroundColor: '#f8d7da',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    borderColor: '#f5c6cb',
    borderWidth: 1,
  },
  textoErro: {
    color: '#721c24',
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  textoItem: {
    fontSize: 16,
    color: '#495057',
  },
  dica: {
    padding: 20,
    alignItems: 'center',
  },
  textoDica: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
  },
});