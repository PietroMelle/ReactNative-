import { ScrollView, Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function ListaNinja() {
  const ninjas = [
    "Naruto 🍜", "Sasuke ⚡", "Sakura 🌸", "Kakashi 🎇", "Itachi 🐦", "Gaara ⌛", "Rock Lee 💪", "Neji 👁‍🗨", "Tenten 🌹", "Shikamaru 🤯", 
    "Ino 🌼", "Choji 🍔", "Kiba 🐺", "Hinata ❄️", "Jiraiya 🐸", "Tsunade 🍶", "Orochimaru 🐍", "Minato ✈️", "Kushina 🔥"
  ];

  return (
    <SafeAreaView style={styles.safeArea}>

      <Text style={styles.titulo}> Lista dos Ninjas </Text>

      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >

        {ninjas.map((ninja, index) => (
          <View key={index} style={styles.ninjaCard}>

            <Text style={styles.ninjaText}> {ninja} </Text>

          </View>
        ))}

      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a2e', 
  },
  titulo: {
    fontSize: 24,
    color: 'white',
    paddingVertical: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a2e', 
  },
  scrollContent: {
    paddingBottom: 16,
  },
  ninjaCard: {
    backgroundColor: '#16213e',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0f3460',
  },
  ninjaText: {
    fontSize: 18,
    color: 'white',
  },
});