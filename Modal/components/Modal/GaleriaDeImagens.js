import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

export default function GaleriaModal() {
    const [modalVisivel, setModalVisivel] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const imagens = [
        {
            id: 1,
            url: "https://picsum.photos/200/300?random=1",
            titulo: "Paisagem 1",
        },
        {
            id: 2,
            url: "https://picsum.photos/200/300?random=2",
            titulo: "Paisagem 2",
        },
        {
            id: 3,
            url: "https://picsum.photos/200/300?random=3",
            titulo: "Paisagem 3",
        },
    ];

    const abrirImagem = (imagem) => {
        setImagemSelecionada(imagem);
        setModalVisivel(true);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> Galeria de Fotos 📸 </Text>

            <ScrollView contentContainerStyle={styles.galeria}>

                {imagens.map((imagem) => (
                    <TouchableOpacity 
                        key={imagem.id} 
                        onPress={() => abrirImagem(imagem)} 
                        style={styles.thumbnail}
                    >
                        <Image source={{ uri: imagem.url }} style={styles.imagemPequena} />
                        <Text style={styles.tituloImagem}> {imagem.titulo} </Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>

            {/* Modal para imagem ampliada */}
            <Modal
                visible={modalVisivel}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisivel(false)}
            >

                <View style={styles.modalContainer}>

                    <TouchableOpacity
                        style={styles.botaoFechar}
                        onPress={() => setModalVisivel(false)}
                    >

                        <Text style={styles.textoFechar}> ❌ Fechar </Text>
                    </TouchableOpacity>

                    {imagemSelecionada && (
                        <>
                        <Image
                            source={{ uri: imagemSelecionada.url }}
                            style={styles.imagemGrande}
                            resizeMode="contain"
                        />
                        <Text style={styles.tituloModal}> {imagemSelecionada.titulo} </Text>
                        <Text style={styles.descricaoModal}> Toque na imagem ou use o botão fechar para voltar </Text>
                        </>
                    )}

                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    galeria: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    thumbnail: {
        margin: 10,
        alignItems: 'center',
    },
    imagemPequena: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    tituloImagem: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoFechar: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 20,
    },
    textoFechar: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagemGrande: {
        width: '90%',
        height: '70%',
    },
    tituloModal: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    descricaoModal: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
});