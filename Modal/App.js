import { StyleSheet, SafeAreaView } from 'react-native';

// 🧱 Componentes

/* 💥 Exemplos */

// 1️⃣ Modal
import Modal from './components/Modal/Modal';
import ModalEAlert from './components/Modal/Modal&Alert'
import GaleriaModal from './components/Modal/GaleriaDeImagens';
import FormularioModal from './components/Modal/FormularioModal';

// 2️⃣ ScrollView
import ScrollView from './components/ScrollView/Scrollview';
import ScrollViewModos from './components/ScrollView/ScrollViewModos';
import ScrollViewInterativo from './components/ScrollView/ScrollViewInterativo';

// 3️⃣ SafeAreView
import SafeAreaViewEx from './components/SafeAreaView/SafeAreaView';
import ComContextoSafeAreaView from './components/SafeAreaView/ComContexto'
import VariacoesMultiplosElementos from './components/SafeAreaView/VariacoesMultiplosElementos';
import ControleExtraAvancado from './components/SafeAreaView/ControloExtraAvancado';

// 4️⃣ KeyBoardAvoidingView
import ExemploPraticoBasicoKeyboard from './components/KeyBoardAvoidingView/ExemploPraticoBasico';
import CompletoComContexto from './components/KeyBoardAvoidingView/CompletoComContexto';
import FormularioCompleto from './components/KeyBoardAvoidingView/FormularioCompleto';
import ControleExtra from './components/KeyBoardAvoidingView/ControleExtra';

// 5️⃣ RefreshControl
import ExemploPraticoBasico from './components/RefreshControl/ExemploPraticoBasico';
import ComContextoRefreshControl from './components/RefreshControl/CompletoComContexto'
import MultiplosElementosRefreshControl from './components/RefreshControl/MultiplosElementos'
import ExemploAvancadoRefreshControl from './components/RefreshControl/ExemploAvancado'

// 5️⃣ Dimensions
import ExemploPraticoBasicoDimensions from './components/Dimensions/ExemploPraticoBasicoDimensions';
import CompletoContextoDimensions from './components/Dimensions/CompletoContextoDimensions';
import MultiplosElementosDimension from './components/Dimensions/MultiplosElementosDimension';
import ExemploAvancadoDimensions from './components/Dimensions/ExemploAvancadoDimensions'

/* 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰 */

/* 💢 Atividades */

// 1️⃣ Modal
import ModalConfirmacaoDeAcao from './components/Atividades/Atv1-ModalConfirmacaoDeAcao';

// 2️⃣ ScrollView
import ScrollViewModal from './components/Atividades/Atv2-ScrollViewModal';
import ScrollDentroScroll from './components/Atividades/Atv3-ScrollDentroScroll';

// 4️ KeyBoardAvoidingView
import CombinacaoModalFormTecSegur from './components/Atividades/Atv4-Combinacao';

// 5️⃣ Dimensions
import CalculadoraDimensions from './components/Atividades/Atv5-Dimensions';
import ReacaoERotacao from './components/Atividades/Atv6-DimensionsReacaoRotacao'

/* 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰 */

/* 📛 Exercícios */

// 1️⃣ Modal
import ModalBoasVindas from './components/Exercicios/Ex1-ModalBoasVindas';
import ModalValidacaoSenha from './components/Exercicios/Ex3-ModalValidacaoSenha';

// 2️⃣ ScrollView
import FormularioScrollView from './components/Exercicios/Ex2-FormularioScrollView';


// 4️ KeyBoardAvoidingView
import FormularioKeyboard from './components/Exercicios/Ex4-FormularioKeyboard';

/* 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰 */

/* 💮 Desafios */

// 2️⃣ ScrollView
import DiarioDev from './components/Desafios/Des1-DiarioDev';
import Posts from './components/Desafios/Des2-Posts';

// 4️ KeyBoardAvoidingView
import RelampagoKeyboard from './components/Desafios/Des3-RelampagoKeyboard';

// 5️⃣ RefreshControl
import MemesRefreshCard from './components/Desafios/Des4-MemesRefreshControl';

/* 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰 */

export default function App() {
  return (
      <SafeAreaView style={styles.container}>

      <ReacaoERotacao />

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});