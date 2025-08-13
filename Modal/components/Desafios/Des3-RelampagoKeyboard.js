import { useState } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  View,
  Alert
} from 'react-native';

export default function AdicionarComentario() {
  const limiteCaracteres = 280;
  const [comentario, setComentario] = useState('');

  const enviarComentario = () => {
    Alert.alert("Sucesso!", `O comentário "${comentario}" foi enviado!`);
    setComentario('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'iOS' ? 'padding' : 'height'}
    >
      <View style={styles.box}>

        <Text style={styles.titulo}> Adicionar Comentário </Text>


        <TextInput
          style={styles.input}
          placeholder="Digite seu comentário..."
          value={comentario}
          onChangeText={text => {
            if (text.length <= limiteCaracteres) setComentario(text);
          }}
          multiline
          maxLength={limiteCaracteres}
        />

        <View style={styles.contadorContainer}>
          <Text style={[styles.contador, comentario.length === limiteCaracteres && { color: 'red' }]}> {comentario.length}/{limiteCaracteres} </Text>
        </View>

        <TouchableOpacity
            style={[
            styles.botao,
            comentario.length === 0 && styles.botaoDesabilitado
            ]}
            disabled={comentario.length === 0}
            onPress={enviarComentario}
        >+9+66+
        

          <Text style={styles.textoBotao}> Enviar </Text>

        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    textAlignVertical: 'top',
  },
  contadorContainer: {
    alignItems: 'flex-end',
    marginTop: 4,
    marginBottom: 12,
  },
  contador: {
    fontSize: 14,
    color: '#888',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: '#ccc',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
