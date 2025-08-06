import { useState, useEffect } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
} from "react-native";

export default function FormularioModal() {
    const [modalVisivel, setModalVisivel] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // Limpa o formulário quando fechar o modal
    useEffect(() => {
        if (!modalVisivel) {
            setNome("");
            setEmail("");
            setLoading(false);
        }
    }, [modalVisivel]);

    const validarFormulario = () => {
        if (!nome.trim()) {
            Alert.alert("Erro", "Por favor, digite seu nome! ❗");
            return false;
        }

        if (!email.trim() || !email.includes("@")) { // É necessário validar o formato do email
            Alert.alert("Erro", "Por favor, digite um email válido! 📧");
            return false;
        }

        return true;
    };

    const salvarDados = async () => {
        if (!validarFormulario()) return;

        setLoading(true);

        // Simulando uma requisição para API
        setTimeout(() => {
            Alert.alert(
                "Sucesso! 🎉",
                `Dados salvos:\n\nNome: ${nome}\nEmail: ${email}`,
                [
                    {
                        text: "OK",
                        onPress: () => setModalVisivel(false),
                    },
                ]
            );
            setLoading(false);
        }, 2000);
    };

    const fecharModal = () => {
        if (nome.trim() || email.trim()) {
            Alert.alert(
                "Atenção ⚠️",
                "Você tem dados não salvos. Deseja realmente sair?",
                [
                    { text: "Cancelar", style: "cancel" },
                    {
                        text: "Sair",
                        style: "destructive",
                        onPress: () => setModalVisivel(false),
                    },
                ]
            );
        } else {
            setModalVisivel(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botaoAbrir}
                onPress={() => setModalVisivel(true)}
            >
                <Text style={styles.textoBotao}>Novo Cadastro ✍️</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisivel}
                animationType="slide"
                transparent={true}
                onRequestClose={fecharModal}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.header}>
                            <Text style={styles.titulo}>Novo Cadastro 📝</Text>
                            <TouchableOpacity onPress={fecharModal} style={styles.botaoX}>
                                <Text style={styles.textoX}>❌</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome"
                            value={nome}
                            onChangeText={setNome}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <View style={styles.botoesContainer}>
                            <TouchableOpacity
                                style={[styles.botao, styles.botaoCancelar]}
                                onPress={fecharModal}
                            >
                                <Text style={styles.textoCancelar}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.botao,
                                    styles.botaoSalvar,
                                    loading && styles.botaoDesabilitado,
                                ]}
                                onPress={salvarDados}
                                disabled={loading}
                            >
                                <Text style={styles.textoSalvar}>
                                    {loading ? "Salvando... ⏳" : "Salvar 💾"}
                                </Text>
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
        backgroundColor: "#f0f0f0",
    },
    botaoAbrir: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 8,
    },
    textoBotao: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        width: "90%",
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
    },
    botaoX: {
        padding: 5,
    },
    textoX: {
        fontSize: 18,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    botoesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 10,
    },
    botao: {
        flex: 1,
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    botaoCancelar: {
        backgroundColor: "#f0f0f0",
    },
    botaoSalvar: {
        backgroundColor: "#00a745",
    },
    botaoDesabilitado: {
        backgroundColor: "#ccc",
    },
    textoCancelar: {
        color: "#333",
        fontWeight: "bold",
    },
    textoSalvar: {
        color: "white",
        fontWeight: "bold",
    },
});