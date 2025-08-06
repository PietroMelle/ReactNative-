import { View, Button, ActionSheetIOS } from 'react-native';

export default function ExemploActionSheetIOS() {

  function abrirMenu() {

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancelar', 'Salvar', 'Deletar'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 2,
        title: 'O que você quer fazer?',
        message: 'Escolha uma ação para o item',
      },

      (indiceSelecionado) => {
        if (indiceSelecionado === 1) alert('Salvo!');
        if (indiceSelecionado === 2) alert('Deletado!');
      }
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button title="Abrir Menu" onPress={abrirMenu} />
      
    </View>
  );
}
