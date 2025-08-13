import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function MeuApp() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}> Olá, mundo seguro! 🌎 </Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
})