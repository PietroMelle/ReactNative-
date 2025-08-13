/*
Atividade 4 - Combinação Modal + Formulário + Teclado Seguro
Enunciado:
Crie um modal com fomuláriode feedbac que abre ao clicar em um botão "Avaliar". O teclado não deve encobrir os campos
Como começar:
- Combine Modal com KeyboardAvoidingView
- Feche o Modal ao enviar o formulário
*/

import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function FeedbackModal() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarFeedback = () => {
  if (
    nome === '' || 
    nome === ' ' || 
    comentario === '' || 
    comentario === ' '
  ) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  Alert.alert('Obrigado!', 'Feedback enviado com sucesso.');
  setNome('');
  setComentario('');
  setModalVisivel(false);
};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoAvaliar}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textoBotao}>Avaliar</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisivel}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            style={styles.modalContent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}
          >
            <Text style={styles.titulo}>Deixe seu feedback 💬</Text>

            <TextInput
              placeholder="Seu nome"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />

            <TextInput
              placeholder="Comentário"
              value={comentario}
              onChangeText={setComentario}
              style={[styles.input, styles.comentario]}
              multiline
            />

            <View style={styles.botoes}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoEnviar}
                onPress={enviarFeedback}
              >
                <Text style={styles.textoEnviar}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAvaliar: {
    backgroundColor: '#2b8a3e',
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '90%',
    elevation: 5,
    marginBottom: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  comentario: {
    height: 80,
    textAlignVertical: 'top',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  botaoCancelar: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  botaoEnviar: {
    backgroundColor: '#2b8a3e',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  textoCancelar: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoEnviar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
