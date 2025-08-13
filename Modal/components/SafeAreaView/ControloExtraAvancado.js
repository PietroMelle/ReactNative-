import { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

export default function TelaConfiguracao() {
  const [tema, setTema] = useState("claro");
  const [notificacoes, setNotificacoes] = useState(true);

  const temaEscuro = tema === "escuro";

  const cores = {
    fundo: temaEscuro ? "#1F2937" : "#FFFFFF",
    texto: temaEscuro ? "#FFFFFF" : "#1F2937",
    cartao: temaEscuro ? "#374151" : "#F9FAFB",
    botao: temaEscuro ? "#3B82F6" : "#1E40AF",
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: cores.fundo }]}>

      <View style={styles.header}>
        <Text style={[styles.titulo, { color: cores.texto }]}>
          ⚙️ Configurações
        </Text>
      </View>

      <View style={styles.conteudo}>

        {/* Seção Aparência */}
        <View style={[styles.secao, { backgroundColor: cores.cartao }]}>

          <Text style={[styles.tituloSecao, { color: cores.texto }]}>
            🎨 Aparência
          </Text>

          <TouchableOpacity
            style={[styles.opcao, { backgroundColor: cores.botao }]}
            onPress={() => setTema(tema === "claro" ? "escuro" : "claro")}
          >

            <Text style={styles.textoOpcao}>
              {temaEscuro ? "🌞 Tema Claro" : "🌙 Tema Escuro"}
            </Text>

          </TouchableOpacity>

        </View>

        {/* Seção Notificações */}
        <View style={[styles.secao, { backgroundColor: cores.cartao }]}>

          <Text style={[styles.tituloSecao, { color: cores.texto }]}>
            🔔 Notificações
          </Text>

          <TouchableOpacity
            style={[
              styles.opcao,
              {
                backgroundColor: notificacoes ? "#10B981" : "#EF4444",
              },
            ]}
            onPress={() => setNotificacoes(!notificacoes)}
          >

            <Text style={styles.textoOpcao}> {notificacoes ? "✅ Ativadas" : "❌ Desativadas"} </Text>

          </TouchableOpacity>

        </View>

        {/* Info do dispositivo */}
        <View style={[styles.info, { backgroundColor: cores.cartao }]}>

          <Text style={[styles.textoInfo, { color: cores.texto }]}> 📱 Plataforma: {Platform.OS === "ios" ? "iOS" : "Android"} </Text>
          <Text style={[styles.textoInfo, { color: cores.texto }]}> 🟦 SafeAreaView: Ativo </Text>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  secao: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  opcao: {
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  textoOpcao: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  info: {
    borderRadius: 12,
    padding: 16,
    marginTop: "auto",
  },
  textoInfo: {
    fontSize: 14,
    marginBottom: 4,
  },
});
