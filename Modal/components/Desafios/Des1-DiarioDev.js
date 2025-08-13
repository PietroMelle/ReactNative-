import { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DiarioDev() {
  const [scrollAtivado, setScrollAtivado] = useState(true);
  const frases = [
    "👋 Olá, React Native!",
    "⌛ O tempo é o melhor amigo do programador.",
    "💡 Sempre há algo novo para aprender.",
    "🐞 Bugs são oportunidades de evolução.",
    "🚀 Deploy não é o fim, é o começo.",
    "🧠 Pensar antes de codar economiza tempo.",
    "🔄 Refatorar é cuidar do futuro do projeto.",
    "🎯 Testes garantem noites tranquilas.",
    "📚 Documentação é amor ao próximo dev.",
    "🤝 Compartilhar conhecimento multiplica resultados.",
  ];
  const fotos = ["📷", "🌄", "🏖️", "🏞️", "🌆", "🌅", "🌠", "🌈"];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> 📕 Diário de Dev</Text>

      <TouchableOpacity
        style={[
          styles.botao,
          scrollAtivado ? styles.botaoAtivo : styles.botaoInativo,
        ]}
        onPress={() => setScrollAtivado(!scrollAtivado)}
        activeOpacity={0.8}
      >

        <Text style={styles.textoBotao}> {scrollAtivado ? "🔒 Bloquear Scroll" : "🔓 Liberar Scroll"} </Text>

      </TouchableOpacity>

        {/* ScrollView Vertical */}
      <ScrollView
        style={styles.listaContainer}
        contentContainerStyle={styles.listaContent}
        scrollEnabled={scrollAtivado}
        showsVerticalScrollIndicator={true}
      >

        {/* ScrollView Horizontal */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.galeriaContent}
          scrollEnabled={scrollAtivado}
          style={styles.galeriaContainer}
        >

          {fotos.map((emoji, index) => (
            <View key={index} style={styles.fotoCard}>

              <Text style={styles.emoji}>{emoji}</Text>

            </View>
          ))}

        </ScrollView>

        {frases.map((texto, index) => (
          <View key={index} style={styles.textoCard}>

            <Text style={styles.texto}> {texto} </Text>

          </View>
        ))}

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  botao: {
    marginHorizontal: 20,
    marginBottom: 16,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoAtivo: {
    backgroundColor: "#22c55e",
  },
  botaoInativo: {
    backgroundColor: "#ef4444",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listaContent: {
    paddingBottom: 30,
  },
  textoCard: {
    backgroundColor: "#bbf7d0",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  texto: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
  },
  fotoCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginRight: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 40,
  },
});
