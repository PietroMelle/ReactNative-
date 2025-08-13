import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";

export default function TelaLogin() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E40AF" />

      <View style={styles.header}>
        <Text style={styles.logo}> 🚀 MeuApp </Text>
        <Text style={styles.subtitulo}> Bem-vindo de volta! </Text>
      </View>

      <View style={styles.formulario}>

        <Text style={styles.label}> Email </Text>
        <View style={styles.input} />

        <Text style={styles.label}> Senha </Text>
        <View style={styles.input} />

        <View style={styles.botao}>
          <Text style={styles.textoBotao}> Entrar </Text>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E40AF",
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  logo: {   
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#93C5FD",
    marginTop: 8,
  },
  formulario: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  label: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    height: 48,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#1E40AF",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
