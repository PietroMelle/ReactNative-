import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  StyleSheet
} from 'react-native';

export default function LoginBasico() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
      />
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
});