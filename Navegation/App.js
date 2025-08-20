import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaLogin from "./components/Login/TelaLogin";
import TelaBoasVindas from "./components/Login/TelaBoasVindas";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TelaBoasVindas" component={TelaBoasVindas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
