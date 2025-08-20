import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const usuariosValidos = [
    {
      email: 'joao@gmail.com',
      senha: '123456',
      nome: 'João Silva',
      perfil: 'administrador',
      ultimoLogin: null,
      preferencias: { tema: 'escuro', notificacoes: true }
    },
    {
      email: 'maria@gmail.com',
      senha: 'senha123',
      nome: 'Maria Santos',
      perfil: 'usuario',
      ultimoLogin: '2024-01-15',
      preferencias: { tema: 'claro', notificacoes: false }
    }
  ];

  const realizarLogin = () => {
    if (!email || !senha) {
      Alert.alert('Campos obrigatórios', 'Preencha email e senha');
      return;
    }

    const usuarioEncontrado = usuariosValidos.find(
      user => user.email === email && user.senha === senha
    );

    if (usuarioEncontrado) {
      const dadosParaEnviar = {
        usuario: {
          ...usuarioEncontrado,
          senha: undefined
        },
        informacoesLogin: {
          dataLogin: new Date().toISOString(),
          dispositivoInfo: 'Mobile App',
          primeiroLogin: usuarioEncontrado.ultimoLogin == null
        }
      };

      navigation.navigate('TelaBoasVindas', dadosParaEnviar);
    } else {
      Alert.alert('Erro no login', 'Email ou senha incorretos');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🔐 Login</Text>
      <Text style={estilos.subtitulo}>Entre na sua conta</Text>

      <TextInput
        style={estilos.input}
        placeholder="Seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.input}
        placeholder="Sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={estilos.botaoLogin} onPress={realizarLogin}>
        <Text style={estilos.textoBotaoLogin}>🚀 Entrar</Text>
      </TouchableOpacity>

      <Text style={estilos.dicaLogin}>
        🔎 Dica: use joao@gmail.com / 123456 ou maria@gmail.com / senha123
      </Text>
    </View>
  );
}

export default TelaLogin

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2b2d42',
  },

  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },

  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },

  botaoLogin: {
    backgroundColor: '#3a86ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },

  textoBotaoLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dicaLogin: {
    marginTop: 16,
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
  }
});
