import { View, Button, Share } from "react-native";

export default function ExemploShare() {

  async function compartilharMeme() {

    try {
      const resultado = await Share.share({
        message: "Olha esse meme sensacional que eu achei no app! 😂🔥",
        url: "https://www.seusite.com/meme.png",
      });

      if (resultado.action === Share.sharedAction) {
        alert("Compartilhado com sucesso!");
      } else if (resultado.action === Share.dismissedAction) {
        alert("Compartilhamento cancelado!");
      }

    } catch (erro) {
      alert("Ih, não rolou o compartilhamento. Tenta de novo!");
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Button title="Compartilhar Meme" onPress={compartilharMeme} />
      
    </View>
  );
}
