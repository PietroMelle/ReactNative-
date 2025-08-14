/*
Atividade 6: Container Inteligente com Reação à Rotação
Crie um container que mude de cor se a largura da tela for maior que a altura (paisagem) e exiba "Modo paisagem detectado!" no centro.
Caso contrário, mostra "Modo retrato".

Como começar:
- Use Dimensions.get('windows') para comparar width e height
- Aplique cores e textos condicionais.
- Adicione ícones se quiser incrementar
*/

import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

export default function ContainerInteligente() {
  const [dimensoes, setDimensoes] = useState(Dimensions.get("window"));
  const [orientacao, setOrientacao] = useState("portrait");

  useEffect(() => {
    // Listener para mudanças de dimensão (rotação da tela)
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensoes(window);
      setOrientacao(window.width > window.height ? "landscape" : "portrait");
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: orientacao === "landscape" ? "#add8e6" : "#ffcccb" }]}>
      <Text style={styles.texto}>
        {orientacao === "landscape" ? "Modo paisagem detectado!" : "Modo retrato"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
