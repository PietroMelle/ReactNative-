import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';

export default function FormularioCompleto() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    comentarios: '',
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90} // Header + Tab navigator
    >
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <Text style={styles.titulo}>Cadastro Completo</Text>

          <TextInput
            placeholder="Nome completo"
            value={dados.nome}
            onChangeText={(text) => setDados({ ...dados, nome: text })}
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            value={dados.email}
            onChangeText={(text) => setDados({ ...dados, email: text })}
            style={styles.input}
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Telefone"
            value={dados.telefone}
            onChangeText={(text) => setDados({ ...dados, telefone: text })}
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Endereço completo"
            value={dados.endereco}
            onChangeText={(text) => setDados({ ...dados, endereco: text })}
            style={styles.input}
            multiline
          />

          <TextInput
            placeholder="Comentários adicionais (opcional)"
            value={dados.comentarios}
            onChangeText={(text) => setDados({ ...dados, comentarios: text })}
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scroll: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Android
  },
});
