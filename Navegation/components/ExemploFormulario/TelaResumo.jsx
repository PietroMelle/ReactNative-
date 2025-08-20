import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

function TelaResumo({ route, navigation }) { // Props: route e navigation 
  const { dadosUsuario } = route.params;

  const confirmarCadastro = () => {
    Alert.alert('✅ Sucesso!', 'Cadastro realizado com sucesso!', [
      { text: 'OK', onPress: () => navigation.navigate('TelaFormulario') },
    ]);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>☑️ Confirme seus dados</Text>

      <View style={estilos.cartaoResumo}>
        <Text style={estilos.label}>👤 Nome:</Text>
        <Text style={estilos.valor}>{dadosUsuario.nome}</Text>

        <Text style={estilos.label}>📧 Email:</Text>
        <Text style={estilos.valor}>{dadosUsuario.email}</Text>

        <Text style={estilos.label}>📞 Telefone:</Text>
        <Text style={estilos.valor}>{dadosUsuario.telefone}</Text>

        <Text style={estilos.labelPequeno}>
          🕒 Preenchido em: {dadosUsuario.dataPreenchimento}
        </Text>
      </View>

      <TouchableOpacity style={estilos.botaoConfirmar} onPress={confirmarCadastro}>
        <Text style={estilos.textoBotao}>🎯 Confirmar Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoVoltar}>🔙 Voltar e Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 26,
    textAlign: 'center',
    color: '#222',
  },
  cartaoResumo: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#444',
  },
  valor: {
    fontSize: 16,
    color: '#000',
  },
  labelPequeno: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
  },
  botaoConfirmar: {
    backgroundColor: '#28A745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoVoltar: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoBotaoVoltar: {
    color: '#333',
    fontSize: 16,
  },
});

export default TelaResumo;
