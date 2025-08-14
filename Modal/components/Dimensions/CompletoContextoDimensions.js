import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";

const { width, height, scale, fontScale } = Dimensions.get("window");

const ProfileScreen = () => {
  // Calculando tamanhos responsivos
  const avatarSize = width * 0.25; // 25% da largura para o avatar
  const cardWidth = width * 0.9; // 90% da largura para os cards
  const isSmallScreen = width < 350; // Detecta telas pequenas

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={[styles.avatar, { width: avatarSize, height: avatarSize }]}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <Text style={[styles.name, { fontSize: isSmallScreen ? 20 : 24 }]}> João Silva </Text>

      </View>

      <View style={[styles.infoCard, { width: cardWidth }]}>

        <Text style={styles.cardTitle}>Informações do Dispositivo</Text>

        <Text style={styles.infoText}>📏 Largura: {width}px</Text>
        <Text style={styles.infoText}>📐 Altura: {height}px</Text>
        <Text style={styles.infoText}>🔍 Escala: {scale}x</Text>
        <Text style={styles.infoText}>🔠 Fonte: {fontScale}x</Text>
        <Text style={styles.infoText}>📺 Tipo: {isSmallScreen ? "Tela Pequena" : "Tela Normal"} </Text>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#6200EA",
  },
  avatar: {
    borderRadius: 1000, // Circular
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: {
    fontSize: width * 0.08, // Tamanho baseado na largura da tela
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 14 * fontScale, // Respeita configuração de acessibilidade
    color: "#666",
    marginBottom: 8,
  },
});

export default ProfileScreen;
