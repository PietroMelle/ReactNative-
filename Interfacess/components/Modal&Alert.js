import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ConfirmacaoModal() {
    const [modalVisivel, setModalVisivel] = useState(false);

    const confirmarAcao = () => {
        Alert.alert("Sucesso!", "Ação confirmada com sucesso! ✅");
        setModalVisivel(false);
    }

    const cancelarAcao = () => {
        setModalVisivel(false);
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.botaoPerigoso}
                onPress={() => setModalVisivel(true)}
            >

                <Text style={styles.textoBotao}> Deletar Item 🗑 </Text>

            </TouchableOpacity>

            <Modal
                visible={modalVisivel}
                animationType="fade"
                transparent={true}
                onRequestClose={cancelarAcao}
            >

                <View style={styles.overlay}>
                    <View style={styles.modalContent}>

                        <Text style={styles.titulo}> ⚠ Atenção! </Text>
                        <Text style={styles.mensagem}> Tem certeza que deseja deletar este item? </Text>
                        <Text style={styles.submensagem}> Esta ação não pode ser desfeita! </Text>

                        <View style={styles.botoesContainer}>
                            <TouchableOpacity 
                                style={styles.botaoCancelar} 
                                onPress={cancelarAcao}
                            >

                                <Text style={styles.textoCancelar}> Cancelar </Text>
                                
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.botaoConfirmar}
                                onPress={confirmarAcao}
                            >

                                <Text style={styles.textoConfirmar}> Confirmar </Text>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    botaoPerigoso: {
        backgroundColor: '#ff4444',
        padding: 15,
        borderRadius: 5,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
       backgroundColor: 'white',
       margin: 20,
       padding: 25,
       borderRadius: 12,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.25,
       shadowRadius: 4,
       elevation: 5,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    mensagem: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 8,
    },
    submensagem: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    botoesContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    botaoCancelar: {
        backgroundColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 6,
    },
    botaoConfirmar: {
        backgroundColor: '#ff4444',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 6,
    },
    textoCancelar: {
        color: '#333',
        fontWeight: 'bold',
    },
    textoConfirmar: {
        color: '#fff',
        fontWeight: 'bold',
    },
})