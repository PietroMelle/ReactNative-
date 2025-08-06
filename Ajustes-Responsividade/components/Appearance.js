import { useEffect, useState } from 'react';
import { View, Text, Appearance } from 'react-native';

export default function TemaDinamico() {

  const [tema, setTema] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) =>
      setTema(colorScheme)
    );
    return () => listener.remove(); // Limpa quando desmontar
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: tema === 'dark' ? '#222' : '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Text style={{ color: tema === 'dark' ? '#fff' : '#333', fontSize: 22 }}>
        Seu app agora é{' '}
        {tema === 'dark' ? 'dark mode vibes 🌚' : 'light mode sunshine ☀️'}!
      </Text>
      
    </View>
  );
}
