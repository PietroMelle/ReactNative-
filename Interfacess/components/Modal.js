import { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

export default function App() {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <View style={styles.container}>

            <Button
                title="Abrir Modal"
                onPress={() => setModalVisivel(true)}
            />

            <Modal
                visible={modalVisivel}
                animationType="fade"
                onRequestClose={() => setModalVisivel(false)}
            >

                <View style={styles.modalContainer}>

                    <Text style={styles.titulo}> Olá, sou um Modal! 👋 </Text>

                    <Button
                        title="Fechar"
                        onPress={() => setModalVisivel(false)}
                    />
                
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'white',
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
});