import { useState } from 'react';
import { ScrollView, RefreshControl, Text, View, StyleSheet } from 'react-native';

export default function FeedNoticias() {
  const [refreshing, setRefreshing] = useState(false);
  const [noticias, setNoticias] = useState([
    'Notícia 1: React Native é demais! 🎉',
    'Notícia 2: RefreshControl salvando vidas 🆘',
    'Notícia 3: Developers felizes usando pull to refresh ✨'
  ]);

  const buscarNovasNoticias = async () => {
    setRefreshing(true);

    try {
      // Simula chamada para API
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Adiciona nova notícia
      const novaNoticia = `Notícia ${noticias.length + 1}: Atualização em ${new Date().toLocaleTimeString()} ⏰`;
      setNoticias(prev => [novaNoticia, ...prev]);
    } catch (error) {
      console.log('Erro ao buscar notícias:', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={buscarNovasNoticias}
          colors={['#ff6b6b', '#4edc4d']}        // Android
          tintColor="#ff6b6b"                   // iOS
          title="Buscando novidades..."         // iOS
          titleColor="#666"                     // iOS
        />
      }
    >
      {noticias.map((noticia, index) => (
        <View key={index} style={styles.noticia}>
          <Text style={styles.textoNoticia}>{noticia}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  noticia: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  textoNoticia: {
    fontSize: 16,
    color: '#333',
  },
});
