import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window'); // Window = Dimensão da tela visível

export default function MeuComponente() {

    return (
        <View style={styles.container}>

            <Text style={styles.info}>
                ➖ Largura: {width.toFixed(0)}px
            </Text>

            <Text style={styles.info}>
                📏 Altura: {height.toFixed(0)}px
            </Text>

            <View style={styles.caixaResponsiva} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    caixaResponsiva: {
        width: width * 0.8, // 80% de largura da tela
        height: 100,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
    },
})