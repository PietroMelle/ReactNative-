import { View, Button, Alert, StyleSheet } from 'react-native';

export default function AlertaAvancado() {

  const mostrarAlerta = () => {
    Alert.alert(
      'O que você deseja fazer?',
      'Escolha uma das opções abaixo:',
      [
        {
          text: 'Salvar',
          onPress: () => {
            Alert.alert('✔️ Salvo!', 'Seus dados foram salvos com sucesso!');
          },
        },
        {
          text: 'Editar',
          onPress: () => {
            Alert.alert('✏️ Modo Edição', 'Agora você pode editar seus dados.');
          },
        },
        {
          text: 'Cancelar',
          onPress: () => {
            Alert.alert('❌ Cancelado', 'Nenhuma ação foi realizada.');
          },
          style: 'cancel', // Estilo padrão do iOS
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log('Usuário saiu do alerta sem escolher nada 😅');
        },
      }
    );
  };

  return (
    <View style={estilos.container}>

      <Button
        title="Abrir Alerta Triplo"
        onPress={mostrarAlerta}
        color="#6200ee"
      />

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
