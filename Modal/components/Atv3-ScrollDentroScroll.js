/*
📎 Atividade 3 - ScrollView Inception (Scroll dentro de Scroll)
❓ Enunciado:
    Monte uma tela com uma galeria horizontal de emojis e, abaixo, uma lista vertical de itens. Teste o comportamento de scroll alinhado.
🚦 Como Começar:
- Use dois <ScrollView>: um horizontal dentro de um vertical.
- No Android, use nestedScrollEnabled={true}.
- Teste a responsabilidade e comportamento de gesto em ambas as direções.
*/

import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function GaleriaHorizontal() {
  const fotos = ['📷', '🌄', '🏖️', '🏞️', '🌆', '🌅', '🌠', '🌈'];

  return (
    <View style={styles.container}>

    {/* Scroll Vertical */}
      <ScrollView
        style={styles.listaContainer}
        contentContainerStyle={styles.listaContent}
      >

      <Text style={styles.titulo}>Galeria Horizontal 🖼️</Text>

      {/* Scroll Horizontal */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.galeriaContent}
        style={styles.galeriaContainer}
      >

        {fotos.map((emoji, index) => (
          <View key={index} style={styles.fotoCard}>

            <Text style={styles.emoji}>{emoji}</Text>

          </View>
        ))}

      </ScrollView>

      <Text style={styles.subtitulo}>Lista Vertical 📋</Text>


        {Array.from({ length: 10 }, (_, i) => (
          <View key={i} style={styles.itemLista}>

            <Text style={styles.itemTexto}>Item {i + 1} da lista</Text>

          </View>
        ))}

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: '#2c3e50',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 24,
    color: '#2c3e50',
  },
  galeriaContainer: {
    maxHeight: 120,
  },
  galeriaContent: {
    paddingHorizontal: 16,
  },
  fotoCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginRight: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 40,
  },
  listaContainer: {
    flex: 1,
  },
  listaContent: {
    padding: 16,
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
  },
  itemTexto: {
    fontSize: 16,
    color: '#2c3e50',
  },
});
