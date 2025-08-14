import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const ResponsiveGrid = () => {
  // Lógica para grid responsivo
  const getNumColumns = () => {
    if (width < 400) return 2;   // Celulares pequenos: 2 colunas
    if (width < 600) return 3;   // Celulares grandes: 3 colunas
    return 4;                    // Tablets: 4 colunas
  };

  const numColumns = getNumColumns();
  const itemWidth = (width - 40) / numColumns - 10; // 40px padding + 10px spacing

  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    color: `hsl(${(i * 30) % 360}, 70%, 60%)`,
  }));

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.gridItem,
        {
          width: itemWidth,
          backgroundColor: item.color,
        },
      ]}
    >
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.itemSize}>{itemWidth.toFixed(0)}px</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Grid Responsivo 🎯</Text>
        <Text style={styles.subtitle}>
          {numColumns} colunas • Largura: {width.toFixed(0)}px
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
        key={numColumns} // Força re-render quando colunas mudam
        contentContainerStyle={styles.grid}
        columnWrapperStyle={numColumns > 1 ? styles.row : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#E3F2FD',
    marginTop: 5,
  },
  grid: {
    padding: 20,
  },
  row: {
    justifyContent: 'space-around',
  },
  gridItem: {
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  itemSize: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
});

export default ResponsiveGrid;
