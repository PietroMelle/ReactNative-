/*
🔨 Exercício 1 - Modal de Boas-Vindas
❓ Enunciado:
    Crie um modal que seja exibido automaticamente quando o app for aberto pela primeira vez. Ele deve dar as boas-vindas
    ao usuário com uma mensagem amigável, um emoji e um botão "Começar".
    - Use o hook useEffect para exibir o modal automaticamente na primeira renderização do componente.
    - Utilize animationType "fade" para suavidade
    - Adicione um botão "Começar" que fecha o modal
✅ Resultado esperado:
    O usuário abre o app e vê um modal com a mensagem "Bem-vindo(a)! 🚀 Que a jornada comece!" + botão para continuar.
*/

import { useState, useEffect } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";

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

                <View style={styles.overlay}>

                    <View style={styles.modalContainer}>

                        <Text style={styles.titulo}> Bem-vindo(a)! 🚀 Que a jornada comece! </Text>

                        <Button
                            title="Começar"
                            onPress={fecharModal}
                        />

                    </View>

                </View>

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
    }
});