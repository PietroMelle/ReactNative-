import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

function TelaListaDeProdutos({ navigation }) {
    const produtos = [
        {
            id: 1,
            nome: 'Smartphone Galaxy S9',
            preco: 2499.99,
            categoria: 'Eletrônicos',
            imagem: 'https://i.zst.com.br/thumbs/12/2b/36/240644672.jpg',
            descricao: 'Smartphone top de linha com câmera incrível.',
            estoque: 15,
            avaliacoes: 4.8,
        },
        {
            id: 2,
            nome: 'Fone Bluetooth Premium',
            preco: 299.99,
            categoria: 'Acessórios',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApYjVcWYw7R-AzXKRwrq-Z7uPPC1ID6iqEw&s',
            descricao: 'Som cristalino e bateria que dura o dia todo.',
            estoque: 8,
            avaliacoes: 4.5,
        },
        {
            id: 3,
            nome: 'Capa Protetora Ultra',
            preco: 49.99,
            categoria: 'Acessórios',
            imagem: 'https://brmotorolanew.vtexassets.com/arquivos/ids/168604-800-auto?v=638815386771000000&width=800&height=auto&aspect=true',
            descricao: 'Proteção militar para seu smartphone.',
            estoque: 30,
            avaliacoes: 4.2,
        },
    ];

    const abrirDetalhesProduto = (produto) => {
        navigation.navigate('TelaDetalhesProduto', {
            produtoSelecionado: produto,
            // Dados extras que podem ser úteis
            origemNavegacao: 'lista_produtos',
            timestampVisita: Date.now()
        });
    };

    const renderizarProduto = ({ item }) => (
        <TouchableOpacity style={estilos.itemProduto} onPress={() => abrirDetalhesProduto(item)}>
            <Image source={{ uri: item.imagem }} style={estilos.imagemProduto} />
            <View style={estilos.infoProduto}>
                <Text style={estilos.nomeProduto}>{item.nome}</Text>
                <Text style={estilos.categoriaProduto}>{item.categoria}</Text>
                <Text style={estilos.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
                <Text style={estilos.avaliacaoProduto}>⭐ {item.avaliacoes}</Text>
            </View>
            <Text style={estilos.setaDireita}> 👉 </Text>
        </TouchableOpacity>
    );

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>🛒 Nossos Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderizarProduto}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default TelaListaDeProdutos;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemProduto: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 15,
        elevation: 3, // sombra Android
        shadowColor: '#000', // sombra iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imagemProduto: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    infoProduto: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    categoriaProduto: {
        fontSize: 14,
        color: '#888',
        marginTop: 2,
    },
    precoProduto: {
        fontSize: 16,
        color: '#27ae60',
        marginTop: 4,
    },
    avaliacaoProduto: {
        fontSize: 14,
        color: '#f39c12',
        marginTop: 2,
    },
    setaDireita: {
        fontSize: 20,
        color: '#ccc',
        marginLeft: 8,
    },
});