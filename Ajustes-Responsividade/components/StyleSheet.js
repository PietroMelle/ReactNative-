import { View, Text, StyleSheet } from "react-native";

export default function ExemploStyleSheet() {

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>Visual caprichado com StyleSheet! 💅</Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EFFF",
  },
  titulo: {
    fontSize: 24,
    color: "#2B3499",
    fontWeight: "bold",
  },
});
