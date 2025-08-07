import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// 🧱 Componentes

// Exemplos
import Modal from './components/Modal';
import ModalEAlert from './components/Modal&Alert'
import GaleriaModal from './components/GaleriaDeImagens';
import FormularioModal from './components/FormularioModal';
import ScrollView from './components/Scrollview';
import ScrollViewModos from './components/ScrollViewModos';
import ScrollViewInterativo from './components/ScrollViewInterativo';

// Atividades
import ModalConfirmacaoDeAcao from './components/Atv1-ModalConfirmacaoDeAcao';
import ScrollViewModal from './components/Atv2-ScrollViewModal';
import ScrollDentroScroll from './components/Atv3-ScrollDentroScroll';

// Exercícios
import ModalBoasVindas from './components/Ex1-ModalBoasVindas';
import ModalValidacaoSenha from './components/Ex3-ModalValidacaoSenha';
import FormularioScrollView from './components/Ex2-FormularioScrollView';

// Desafios
import DiarioDev from './components/Des1-DiarioDev';
import Posts from './components/Des2-Posts';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <DiarioDev />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}