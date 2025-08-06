/*
Exercício 3 - Modal de Validação de Senha
Enunciado:
Crie um modal para confirmar a senha antes de executar uma ação sensível (ex.: excluir conta). Se a senha estiver correta,
exiba Alert de sucesso. Se estiver errada, exiba erro.
- Use TextInput com secureTextEntry={true}
- Compare com a senha "hardcoded" ou estado mockado
- Use Alert.alert para exibir mensagens de feedback

Resultado esperado:
Modal com campo de senha + botão de confirmar. Feedback diferente para senha correta e incorreta
*/

import { useState } from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function ModalValidacaoSenha() {
    const [modalVisivel, setModalVisivel] = useState(false);
    const [senha, setSenha] = useState("");
    const senhaCorreta = "palmeiras";

    const validarSenha = () => {
        if (senha === senhaCorreta) {
            Alert.alert("Sucesso", "Senha correta! A conta foi excluída com sucesso.");
            setModalVisivel(false);
            setSenha("");
        } else {
            Alert.alert("Erro", "Senha incorreta. Tente novamente.");
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> Excluir Conta </Text>
            
            <TouchableOpacity
                style={styles.botaoAcao}
                onPress={() => setModalVisivel(true)}
            >

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}> Confirmar Exclusão 🗑 </Text>

            </TouchableOpacity>

            <Modal
                visible={modalVisivel}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisivel(false)}
            >

                <View style={styles.overlay}>

                    <View style={styles.modalContainer}>

                        <Text style={styles.titulo}> Por favor, confirme sua senha para a exclusão da conta 🔓 </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        />

                        <View style={styles.botoes}>

                            <TouchableOpacity
                                style={styles.botaoCancelar}
                                onPress={() => {
                                    setModalVisivel(false);
                                    setSenha("");
                                }}
                            >

                                <Text style={styles.textoCancelar}> Cancelar </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.botaoConfirmar}
                                onPress={validarSenha}
                            >

                                <Text style={styles.textoConfirmar}> Confirmar </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>
            
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
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    botaoAcao: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 12,
        alignItems: "center",
        elevation: 5,
        width: "80%",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    botaoCancelar: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
    },
    botaoConfirmar: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
    },
    textoCancelar: {
        fontWeight: "bold",
    },
    textoConfirmar: {
        color: "white",
        fontWeight: "bold",
    },
});