import { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';

export default function ScrollInterativo() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [items, setItems] = useState([
    { id: 1, texto: 'Item especial 1', especial: true },
    { id: 2, texto: 'Item normal 1', especial: false },
    { id: 3, texto: 'Item especial 2', especial: true },
    { id: 4, texto: 'Item normal 2', especial: false },
    { id: 5, texto: 'Item especial 3', especial: true },
  ]);
  const [fadeAnim] = useState(new Animated.Value(1));

  const adicionarItem = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0.5, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
    const novoItem = {
      id: items.length + 1,
      texto: `Item ${items.length + 1}`,
      especial: Math.random() > 0.5,
    };
    setItems([...items, novoItem]);
  };

  const handleScrollBeginDrag = () => {
    console.log('🛑 Usuário começou a scrollar');
  };

  const handleScrollEndDrag = () => {
    console.log('✅ Usuário parou de scrollar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🕹️ Scroll Controlado</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[
            styles.botao,
            scrollEnabled ? styles.botaoInativo : styles.botaoAtivo,
            styles.sombraBotao,
          ]}
          onPress={() => setScrollEnabled(!scrollEnabled)}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>
            {scrollEnabled ? '🔒 Travar' : '🔓 Destravar'} 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAdicionar, styles.sombraBotao]}
          onPress={adicionarItem}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>🛒 Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          scrollEnabled={scrollEnabled}
          bounces={true}
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={handleScrollBeginDrag}
          onScrollEndDrag={handleScrollEndDrag}
          onContentSizeChange={(w, h) =>
            console.log(`📏 Tamanho do conteúdo: ${h.toFixed(0)}px`)
          }
        >
          <Text style={styles.instrucao}>
            {scrollEnabled
              ? '✅ Scroll liberado: Deslize à vontade'
              : '⛔ Scroll travado! Destrave acima'} 
          </Text>

          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.itemCard,
                item.especial ? styles.itemEspecial : styles.itemNormal,
                styles.sombraItem,
              ]}
              onPress={() => Alert.alert('📢', `Você tocou no ${item.texto}`)}
              activeOpacity={0.85}
            >
              <Text style={styles.itemTexto}>
                {item.especial ? '🌟 ' : '📄 '}
                {item.texto}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>
              📦 Total de itens: {items.length}
            </Text>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#22c55e',
    padding: 24,
    paddingTop: 50,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 4,
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  titulo: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    gap: 16,
  },
  botao: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    minWidth: 140,
    alignItems: 'center',
    transition: 'background-color 0.2s',
  },
  botaoAtivo: {
    backgroundColor: '#22c55e',
  },
  botaoInativo: {
    backgroundColor: '#ef4444',
  },
  botaoAdicionar: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  sombraBotao: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
  },
  instrucao: {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: 18,
    borderRadius: 12,
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    elevation: 2,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemCard: {
    padding: 18,
    marginBottom: 14,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
  },
  itemEspecial: {
    backgroundColor: '#bbf7d0',
    borderColor: '#22c55e',
  },
  itemNormal: {
    backgroundColor: '#a7f3d0',
    borderColor: '#2563eb',
  },
  sombraItem: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 3,
  },
  itemTexto: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  rodape: {
    marginTop: 28,
    padding: 24,
    backgroundColor: '#2563eb',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  textoRodape: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});