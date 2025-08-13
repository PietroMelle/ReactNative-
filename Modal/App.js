import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// 🧱 Componentes

// Exemplos
import Modal from './components/Modal/Modal';
import ModalEAlert from './components/Modal/Modal&Alert'
import GaleriaModal from './components/Modal/GaleriaDeImagens';
import FormularioModal from './components/Modal/FormularioModal';
import ScrollView from './components/ScrollView/Scrollview';
import ScrollViewModos from './components/ScrollView/ScrollViewModos';
import ScrollViewInterativo from './components/ScrollView/ScrollViewInterativo';

import SafeAreaViewEx from './components/SafeAreaView/SafeAreaView';
import ComContextoSafeAreaView from './components/SafeAreaView/ComContexto'
import VariacoesMultiplosElementos from './components/SafeAreaView/VariacoesMultiplosElementos';
import ControleExtraAvancado from './components/SafeAreaView/ControloExtraAvancado';

import ExemploPraticoBasicoKeyboard from './components/KeyBoardAvoidingView/ExemploPraticoBasico';
import CompletoComContexto from './components/KeyBoardAvoidingView/CompletoComContexto';
import FormularioCompleto from './components/KeyBoardAvoidingView/FormularioCompleto';
import ControleExtra from './components/KeyBoardAvoidingView/ControleExtra';

import ExemploPraticoBasico from './components/RefreshControl/ExemploPraticoBasico';
import ComContextoRefreshControl from './components/RefreshControl/CompletoComContexto'
import MultiplosElementosRefreshControl from './components/RefreshControl/MultiplosElementos'
import ExemploAvancadoRefreshControl from './components/RefreshControl/ExemploAvancado'

// Atividades
import ModalConfirmacaoDeAcao from './components/Atividades/Atv1-ModalConfirmacaoDeAcao';
import ScrollViewModal from './components/Atividades/Atv2-ScrollViewModal';
import ScrollDentroScroll from './components/Atividades/Atv3-ScrollDentroScroll';

import CombinacaoModalFormTecSegur from './components/Atividades/Atv4-Combinacao';

// Exercícios
import ModalBoasVindas from './components/Exercicios/Ex1-ModalBoasVindas';
import ModalValidacaoSenha from './components/Exercicios/Ex3-ModalValidacaoSenha';
import FormularioScrollView from './components/Exercicios/Ex2-FormularioScrollView';

import FormularioKeyboard from './components/Exercicios/Ex4-FormularioKeyboard';

// Desafios
import DiarioDev from './components/Desafios/Des1-DiarioDev';
import Posts from './components/Desafios/Des2-Posts';

import RelampagoKeyboard from './components/Desafios/Des3-RelampagoKeyboard';

import MemesRefreshCard from './components/Desafios/Des4-MemesRefreshControl';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>

      <CombinacaoModalFormTecSegur />

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});