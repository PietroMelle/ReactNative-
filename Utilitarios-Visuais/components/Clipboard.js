import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
// import Clipboard from '@react-native-clipboard/clipboard';

export default function ExemploClipboard() {

  const [mensagem, setMensagem] = useState("");
  const [copiado, setCopiado] = useState(false);

  function copiarParaClipboard() {
    Clipboard.setString(mensagem);
    setCopiado(true);
    Alert.alert("Copiado!", "Texto copiado para a área de transferência!");
  }

  async function colarDoClipboard() {
    const textoColado = await Clipboard.getString();
    setMensagem(textoColado);
  }

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>

      <Text style={{ fontSize: 18, marginBottom: 12 }}>
        Área de transferência raiz:
      </Text>

      <TextInput
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Digite ou cole algo aqui"
        style={{
          borderWidth: 1,
          borderRadius: 6,
          padding: 10,
          marginBottom: 12,
        }}
      />

      <Button title="Copiar" onPress={copiarParaClipboard} />

      <View style={{ marginVertical: 8 }} />

      <Button title="Colar" onPress={colarDoClipboard} />
      {copiado && (
        <Text style={{ marginTop: 10, color: "green" }}>✅ Copiado!</Text>
      )}
      
    </View>
  );
}
