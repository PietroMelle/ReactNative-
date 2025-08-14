/*
Atividade 5 - Dimensions
Enunciado:
Crie um app "Calculadora de Proporções" que:
- Mostra as dimensões da tela.
- Permite o usuário inserir uma largura desejada.
- Calcula automaticamente a altura proporcional (16:9),
- Adapta o layout quando a tela for rotacionada.
- Use cores diferentes para orientação portrait e landscape.
*/

import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function CalculadoraDeProporcoes() {
  const [dimensoes, setDimensoes] = useState(Dimensions.get("window"));
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [orientacao, setOrientacao] = useState("portrait");
  const [mostrarInfo, setMostrarInfo] = useState(false);

  useEffect(() => {
    // Listener para mudanças de dimensão (rotação da tela)
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensoes(window);
      setOrientacao(window.width > window.height ? "landscape" : "portrait");
    });

    return () => subscription.remove();
  }, []);

  // Função para calcular a altura proporcional
  const calcularAlturaProporcional = () => {
    if (width) {
      const widthValue = parseFloat(width); // Converte a largura para número
      const alturaCalculada = (widthValue * 9) / 16; // Multiplica por 9 e divide por 16, o que é a proporção 16:9
      setHeight(alturaCalculada.toFixed(0)); // Sem casas decimais
    } else {
      setHeight(""); // Limpa a altura se a largura não for válida
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: orientacao === "portrait" ? "white" : "#fff" } ]}>
      {/* Caso for portrait/retrado o fundo é branco, caso contrário é acinzentado */}
      

      <Text style={styles.title}> Calculadora de Proporções 📐 </Text>

      <TextInput
        style={styles.input}
        placeholder="Insira a largura desejada..."
        value={width}
        keyboardType="numeric"
        onChangeText={setWidth}
        onSubmitEditing={calcularAlturaProporcional}
      />

      <Text style={styles.resultado}>
        Altura proporcional (16:9): {height}px
      </Text>

      <TouchableOpacity style={[styles.botao, { backgroundColor: mostrarInfo ? "#b35f5fff" : "#b2c859ff" } ]}
        onPress={() => setMostrarInfo(!mostrarInfo)}
      >

        <Text style={{ color: "#fff" }}>
          {mostrarInfo ? "Ocultar" : "Mostrar"} Informações do Dispositivo
        </Text>

      </TouchableOpacity>

      <View
        style={[styles.informacoes, { display: mostrarInfo ? "flex" : "none" }]}
      >
        <Text style={styles.titulo}>Dimensões Atuais</Text>
        <Text style={styles.infoTexto}>📏 Largura: {dimensoes.width}px</Text>
        <Text style={styles.infoTexto}>📐 Altura: {dimensoes.height}px</Text>
        <Text style={styles.infoTexto}>🔍 Escala: {dimensoes.scale}x</Text>
        <Text style={styles.infoTexto}>🔠 Fonte: {dimensoes.fontScale}x</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  dimensionText: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: "bold",
  },
      botao: {
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 15,
        marginTop: 15,
    },
  informacoes: {
        backgroundColor: "#e6e3e3ff",
        borderRadius: 12,
        padding: 40,
        alignSelf: "center",
        alignItems: 'center',
        gap: 10,
    },
});
