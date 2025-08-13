import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";

export default function TelaFeed() {
  const posts = [
    { id: 1, autor: "João", texto: "Que dia lindo! 🌞" },
    { id: 2, autor: "Maria", texto: "Aprendendo React Native! 🚀" },
    { id: 3, autor: "Pedro", texto: "SafeAreaView salvou meu app! 📱" },
    { id: 4, autor: "Ana", texto: "Adoro programar à noite! 🌙" },
    { id: 5, autor: "Lucas", texto: "React Native é incrível! 💻" },
    { id: 6, autor: "Julia", texto: "Vamos fazer um app juntos? 🤝" },
    { id: 7, autor: "Carlos", texto: "A comunidade é muito unida! ❤️" },
    { id: 8, autor: "Fernanda", texto: "Desenvolvimento mobile é o futuro! 📲" },
    { id: 9, autor: "Roberto", texto: "Estou amando aprender isso! 😍" },
    { id: 10, autor: "Sofia", texto: "Vamos criar algo incrível! ✨" },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* Header fixo */}
      <View style={styles.header}>
        <Text style={styles.titulo}> 📄 Feed </Text>
        <Text style={styles.notificacoes}> 🔔 3 </Text>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>

        {/* .map para renderizar cada um dos posts, um por um */}
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.autor}> 👤 {post.autor} </Text>
            <Text style={styles.texto}> {post.texto} </Text>
          </View>
        ))}

      </ScrollView>

      {/* Footer fixo */}
      <View style={styles.footer}>
        <Text style={styles.botaoFooter}> 🏠 </Text>
        <Text style={styles.botaoFooter}> 🔍 </Text>
        <Text style={styles.botaoFooter}> ❤️ </Text>
        <Text style={styles.botaoFooter}> 👤 </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
  },
  notificacoes: {
    fontSize: 16,
  },
  feed: {
    flex: 1,
    paddingHorizontal: 16,
  },
  post: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  autor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 4,
  },
  texto: {
    fontSize: 16,
    color: "#1F2937",
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  botaoFooter: {
    fontSize: 24,
    padding: 8,
  },
});
