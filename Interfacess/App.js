import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// 🧱 Componentes

// Exemplos
import Modal from './components/Modal';
import ModalEAlert from './components/Modal&Alert'
import GaleriaModal from './components/GaleriaDeImagens';
import FormularioModal from './components/FormularioModal';

// Atividades
import ModalConfirmacaoDeAcao from './components/Atv1-ModalConfirmacaoDeAcao';

// Exercícios
import ModalBoasVindas from './components/Ex1-ModalBoasVindas';
import ModalValidacaoSenha from './components/Ex3-ModalValidacaoSenha';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ModalValidacaoSenha />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}