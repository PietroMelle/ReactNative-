import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function TelaBoasVindas({ route, navigation }) {
  const { usuario, informacoesLogin } = route.params;
  const [saudacao, setSaudacao] = useState('');

  useEffect(() => {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora < 12) {
      setSaudacao('🌅 Bom dia');
    } else if (hora < 18) {
      setSaudacao('🌞 Boa tarde');
    } else {
      setSaudacao('🌙 Boa noite');
    }
  }, []);

  const formatarDataLogin = (dataISO) => {
    return new Date(dataISO).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const irParaDashboard = () => {
    navigation.navigate('TelaDashboard', {
      dadosUsuario: usuario,
      sessaoInfo: informacoesLogin
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.saudacao}>
        {saudacao}, {usuario.nome}!
      </Text>

      {informacoesLogin.primeiroLogin ? (
        <View style={estilos.blocoInfo}>
          <Text style={estilos.destaque}>🌟 Primeiro login!</Text>
          <Text style={estilos.textoInfo}>Bem-vindo(a) ao nosso app!</Text>
        </View>
      ) : (
        <View style={estilos.blocoInfo}>
          <Text style={estilos.destaque}>🔁 Bem-vindo(a) de volta!</Text>
          <Text style={estilos.textoInfo}>
            Último login: {usuario.ultimoLogin}
          </Text>
        </View>
      )}

      <View style={estilos.cartaoUsuario}>
        <Text style={estilos.labelInfo}>📧 Email:</Text>
        <Text style={estilos.valorInfo}>{usuario.email}</Text>

        <Text style={estilos.labelInfo}>🧑 Perfil:</Text>
        <Text style={estilos.valorInfo}>
          {usuario.perfil === 'administrador' ? '🛠️ Administrador' : '🙋 Usuário'}
        </Text>

        <Text style={estilos.labelInfo}>🕓 Login atual:</Text>
        <Text style={estilos.valorInfo}>
          {formatarDataLogin(informacoesLogin.dataLogin)}
        </Text>

        <Text style={estilos.labelInfo}>🎨 Tema preferido:</Text>
        <Text style={estilos.valorInfo}>
          {usuario.preferencias.tema === 'escuro' ? '🌙 Escuro' : '🌞 Claro'}
        </Text>
      </View>

      <TouchableOpacity style={estilos.botaoContinuar} onPress={irParaDashboard}>
        <Text style={estilos.textoBotaoContinuar}>📊 Ir para o Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoLogout}
        onPress={() => navigation.navigate('TelaLogin')}
      >
        <Text style={estilos.textoBotaoLogout}>🚪 Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaBoasVindas

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    padding: 24,
    justifyContent: 'center',
  },

  saudacao: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 16,
  },

  blocoInfo: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  destaque: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3a86ff',
    marginBottom: 4,
  },

  textoInfo: {
    fontSize: 16,
    color: '#444',
  },

  cartaoUsuario: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 12,
    elevation: 2,
  },

  labelInfo: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
  },

  valorInfo: {
    fontSize: 16,
    color: '#2b2d42',
    fontWeight: '500',
  },

  botaoContinuar: {
    marginTop: 24,
    backgroundColor: '#06d6a0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotaoContinuar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoLogout: {
    marginTop: 12,
    backgroundColor: '#ef233c',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotaoLogout: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});