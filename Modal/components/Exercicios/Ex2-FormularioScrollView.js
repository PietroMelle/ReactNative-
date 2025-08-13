/*
📎 Exercício 2 - Formulário Infinito (mas não tanto)
❓ Enunciado:
    Crie um formulário de cadastro com vários campos (Nome, Email, Telefone, Endereço, Hobbies, Biografia, Linkedin, Senha, GitHub).
    Ele deve ser completamente rolável.
🚦 Como Começar:
- Use <ScrollView> envolvendo os inputs.
- Aplique keyBoardShouldPersistTaps="handled" para não ficar preso no teclado.
- Coloque paddingBottom generoso para evitar sobreposição com o teclado.
*/

import { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

export default function Ex2FormularioScrollView() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    hobbies: '',
    biografia: '',
    linkedin: '',
    senha: '',
    github: '',
  });

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >

        <Text style={styles.titulo}> Formulário de Cadastro </Text>
        
        <Text style={styles.subTitulo}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={form.nome}
          onChangeText={v => handleChange('nome', v)}
        />

        <Text style={styles.subTitulo}> Email: </Text>
        <TextInput
          style={styles.input}
          placeholder="DIgite seu email"
          value={form.email}
          onChangeText={v => handleChange('email', v)}
        />

        <Text style={styles.subTitulo}> Telefone: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={form.telefone}
          onChangeText={v => handleChange('telefone', v)}
        />

        <Text style={styles.subTitulo}> Endereço: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço"
          value={form.endereco}
          onChangeText={v => handleChange('endereco', v)}
        />

        <Text style={styles.subTitulo}> Hobbies: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seus hobbies"
          value={form.hobbies}
          onChangeText={v => handleChange('hobbies', v)}
        />

        <Text style={styles.subTitulo}> Biografia: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua biografia"
          value={form.biografia}
          onChangeText={v => handleChange('biografia', v)}
        />

        <Text style={styles.subTitulo}> Linkedin: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu perfil do Linkedin"
          value={form.linkedin}
          onChangeText={v => handleChange('linkedin', v)}
        />

        <Text style={styles.subTitulo}> GitHub: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu GitHub"
          value={form.github}
          onChangeText={v => handleChange('github', v)}
        />

        <Text style={styles.subTitulo}> Senha: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={form.senha}
          onChangeText={v => handleChange('senha', v)}
          secureTextEntry
        />

         <TouchableOpacity style={styles.botaoEnviar} activeOpacity={0.8}>
          <Text style={styles.textoBotaoEnviar}>Enviar</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#db1111ff',
    marginBottom: 8,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
  },
   botaoEnviar: {
    backgroundColor: '#db1111ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    width: 200,
    alignSelf: 'center',
  },
  textoBotaoEnviar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
})