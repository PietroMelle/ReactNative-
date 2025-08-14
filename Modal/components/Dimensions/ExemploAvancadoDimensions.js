import { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar } from 'react-native';

const AdaptiveLayout = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    // Listener para mudanças de dimensão (rotação da tela)
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    });

    // Cleanup
    return () => subscription.remove();
  }, []);

  const { width, height, scale, fontScale } = dimensions;

  // Configurações adaptáveis baseadas na orientação e tamanho
  const getLayoutConfig = () => {
    const isTablet = Math.min(width, height) > 600;
    const isLandscape = orientation === 'landscape';
    
    return {
      containerPadding: isTablet ? 40 : 20,
      fontSize: isTablet ? 18 : 16,
      cardColumns: isLandscape ? (isTablet ? 3 : 2) : 1,
      headerHeight: isLandscape ? 80 : 120,
    };
  };

  const config = getLayoutConfig();
  const cardWidth = (width - (config.containerPadding * 2) - (config.cardColumns - 1) * 15) / config.cardColumns;

  const cards = [
    { title: 'Vendas', value: 'R$ 25.000,00', icon: '💰', color: '#4CAF50' },
    { title: 'Clientes', value: '1.234', icon: '👥', color: '#2196F3' },
    { title: 'Produtos', value: '567', icon: '📦', color: '#FF9800' },
  ];

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#1976D2" barStyle="light-content" />

      {/* Header adaptável */}
      <View style={[styles.header, { height: config.headerHeight }]}>

        <Text style={[styles.headerTitle, { fontSize: config.fontSize + 6 }]}>
          Dashboard Adaptável 📊
        </Text>

        <Text style={[styles.headerSubtitle, { fontSize: config.fontSize - 2 }]}>
          {orientation === 'landscape' ? 'Paisagem' : 'Retrato'} • Escala: {scale}x
        </Text>

      </View>

      {/* Card responsivos */}
      <View style={[styles.content, { padding: config.containerPadding }]}>

        {cards.map((card, index) => (
          <View key={index} style={{
            width: cardWidth,
            backgroundColor: card.color,
            marginBottom: orientation === 'landscape' ? 10 : 15,
            marginRight: (index + 1) % config.cardColumns === 0 ? 0 : 15
          }}>

            <Text style={styles.cardIcon}>{card.icon}</Text>

            <Text style={[styles.cardTitle, { fontSize: config.fontSize }]}>
              {card.title}
            </Text>

            <Text style={[styles.cardValue, { fontSize: config.fontSize + 4 }]}>
              {card.value}
            </Text>

          </View>
        ))}

      </View>
      {/* Informações de debug */}
      <View style={styles.debugInfo}>
        <Text style={styles.debugTitle}>🧷 Info Técnica:</Text>
        <Text style={styles.debugText}>Orientação: {orientation}</Text>
        <Text style={styles.debugText}>Colunas: {config.cardColumns}</Text>
        <Text style={styles.debugText}>Tamanho: {Math.min(width, height) > 600 ? 'Tablet' : 'Celular'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#BBDEFB',
    marginTop: 5,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  card: {
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  cardValue: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
  debugInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 'auto',
  },
  debugTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  debugText: {
    fontSize: 14,
  }
});

export default AdaptiveLayout;
