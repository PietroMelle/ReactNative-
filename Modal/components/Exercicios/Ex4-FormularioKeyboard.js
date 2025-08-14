import { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Platform, StyleSheet, View, Alert } from "react-native";

export default function AdicionarComentario() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const enviarFormulario = () => {
    Alert.alert("Sucesso!", `O formulario foi enviado!`);
    setEmail("");
    setNome("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "iOS" ? "padding" : "height"}
    >
      <View style={styles.formulario}>
        <Text style={styles.titulo}> Formulário 💻 </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={[styles.botao, !email.includes("@") && styles.botaoDesabilitado]}
          disabled={!email.includes("@")}
          onPress={enviarFormulario}
        >
          <Text style={styles.textoBotao}> Enviar </Text>

        </TouchableOpacity>

      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  formulario: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    textAlignVertical: "top",
    marginBottom: 12,
  },
  contadorContainer: {
    alignItems: "flex-end",
    marginTop: 4,
    marginBottom: 12,
  },
  contador: {
    fontSize: 14,
    color: "#888",
  },
  botao: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoDesabilitado: {
    backgroundColor: "#ccc",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
