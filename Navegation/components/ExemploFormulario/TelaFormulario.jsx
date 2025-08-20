import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

function TelaFormulario({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const validarEnviar = () => {
    if (!nome.trim()) {
      Alert.alert('⚠️ Ops!', 'Por favor, digite seu nome.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('📧 Email inválido', 'Digite um email válido.');
      return;
    }

    if (telefone.length < 10) {
      Alert.alert('📵 Telefone inválido', 'Digite um número válido com DDD.');
      return;
    }

    navigation.navigate('TelaResumo', {
      dadosUsuario: {
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
        dataPreenchimento: new Date().toLocaleString('pt-BR'),
      },
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>📋 Cadastro Rápido</Text>

      <TextInput
        style={estilos.input}
        placeholder="Seu nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={estilos.input}
        placeholder="seu.email@exemplo.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={estilos.input}
        placeholder="(11) 99999-9999"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={estilos.botao} onPress={validarEnviar}>
        <Text style={estilos.textoBotao}>🚀 Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaFormulario;
