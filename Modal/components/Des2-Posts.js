import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from "react-native";

export default function Posts() {
    const imagens = [
        { id: 1, url: "https://picsum.photos/200/300?random=1", titulo: "Post #1", descricao: "Paisagem bela!", especial: true },
        { id: 2, url: "https://picsum.photos/200/300?random=2", titulo: "Post #2", descricao: "Paisagem bonita!", especial: false },
        { id: 3, url: "https://picsum.photos/200/300?random=3", titulo: "Post #3", descricao: "Paisagem mais ou menos!", especial: false },
        { id: 4, url: "https://picsum.photos/200/300?random=4", titulo: "Post #4", descricao: "Paisagem maravilhosa!", especial: true },
        { id: 5, url: "https://picsum.photos/200/300?random=5", titulo: "Post #5", descricao: "Paisagem bonitinha!", especial: false },
        { id: 6, url: "https://picsum.photos/200/300?random=6", titulo: "Post #6", descricao: "Paisagem mais ou menos!", especial: true },
        { id: 7, url: "https://picsum.photos/200/300?random=7", titulo: "Post #7", descricao: "Paisagem bonitinha!", especial: true },
        { id: 8, url: "https://picsum.photos/200/300?random=8", titulo: "Post #8", descricao: "Paisagem bela!", especial: false },
        { id: 9, url: "https://picsum.photos/200/300?random=9", titulo: "Post #9", descricao: "Paisagem bonita!", especial: false },
        { id: 10, url: "https://picsum.photos/200/300?random=10", titulo: "Post #10", descricao: "Paisagem maravilhosa!", especial: true },
        { id: 11, url: "https://picsum.photos/200/300?random=11", titulo: "Post #11", descricao: "Paisagem maravilhosa!", especial: false },
        { id: 12, url: "https://picsum.photos/200/300?random=12", titulo: "Post #12", descricao: "Paisagem bonita!", especial: true },
        { id: 13, url: "https://picsum.photos/200/300?random=13", titulo: "Post #13", descricao: "Paisagem bela!", especial: false },
        { id: 14, url: "https://picsum.photos/200/300?random=14", titulo: "Post #14", descricao: "Paisagem mais ou menos!", especial: false },
        { id: 15, url: "https://picsum.photos/200/300?random=15", titulo: "Post #15", descricao: "Paisagem bonitinha!", especial: true },
    ];

    const verMais = (id) => {
        Alert.alert(`Você clicou no Post ${id}:`, `Paisagem ${id} maravilhosa de um lugar qualquer! 🎇`);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> 🌆 Feed com Imagens </Text>

            <ScrollView contentContainerStyle={styles.galeria}>

                {imagens.map((imagem) => (

                    <View
                        key={imagem.id}
                        style={[
                            styles.postCard,
                            imagem.especial && styles.postCardEspecial,
                        ]}
                    >

                        <Image source={{ uri: imagem.url }} style={styles.tamanhoImagem} />

                         <Text style={styles.tituloImagem}>
                            {imagem.titulo} {imagem.especial ? "🔥" : ""}
                        </Text>

                        <Text
                            style={[
                                styles.descricao,
                                imagem.especial && styles.descricaoEspecial,
                            ]}
                        >

                            {imagem.descricao}

                        </Text>

                        {imagem.especial && (
                            <TouchableOpacity
                                style={styles.botaoVerMais}
                                onPress={() => verMais(imagem.id)}
                                activeOpacity={0.8}
                            >

                                <Text style={styles.textoBotaoVerMais}> Ver mais </Text>

                            </TouchableOpacity>
                        )}
                    </View>

                ))}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 30,
    },
    galeria: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    postCard: {
        marginHorizontal: 18,
        marginBottom: 32,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 18,
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        width: 340,
    },
    postCardEspecial: {
        backgroundColor: '#d6d6d628',
        borderWidth: 2,
        borderColor: 'red',
    },
    tamanhoImagem: {
        width: 300,
        height: 250,
        borderRadius: 14,
        marginBottom: 14,
        backgroundColor: '#eee',
    },
    tituloImagem: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#22c55e',
    },
    descricao: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
    },
    descricaoEspecial: {
        color: '#ff9800',
        fontWeight: 'bold',
    },
    botaoVerMais: {
        backgroundColor: '#22c55e',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 24,
        marginTop: 8,
    },
    textoBotaoVerMais: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
})