/*
🔨 Atividade 2 - Modal de Boas-Vindas com ScrollView
❓ Enunciado:
    Utilize o Exercício 2 como base e adicione um ScrollView para rolar a tela
*/

import { useState, useEffect } from "react";
import { View, Text, Modal, Button, StyleSheet, ScrollView, SafeAreaView, } from "react-native";

export default function ModalBoasVindas() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [mostrarBemVindo, setMostrarBemVindo] = useState(false);

  useEffect(() => {
    setModalVisivel(true);
  }, []);

  const fecharModal = () => {
    setModalVisivel(false);
    setMostrarBemVindo(true);
  };

  return (
      <View style={styles.container}>

        <Modal
          visible={modalVisivel}
          animationType="fade"
          transparent={true}
          onRequestClose={fecharModal}
        >
            <SafeAreaView style={{ flex: 1 }}>

          <ScrollView style={{ padding: 20 }}>

            <Text style={styles.textoScroll}> Palmeiras... </Text>

            <Text style={styles.textoScroll}> Tristeza... </Text>

            <Text style={styles.textoScroll}> Vergonha... </Text>

            <Text style={styles.textoScroll}> Infelicidade... </Text>

            <Text style={styles.textoScroll}> Melhore! </Text>

            <View style={styles.overlay}>

              <View style={styles.modalContainer}>

                <Text style={styles.titulo}> Bem-vindo(a)! 🚀 Que a jornada comece! </Text>

                <Button title="Começar" onPress={fecharModal} />

              </View>

            </View>

          </ScrollView>

          </SafeAreaView>

        </Modal>

        {mostrarBemVindo && (
          <Text style={styles.textoModalFechado}> Olá! </Text>
        )}

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 15,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
    elevation: 10,
  },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  textoModalFechado: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  textoScroll: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
  },
});
