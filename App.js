
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import Welcome from './screens/Welcome';
import Lists from './screens/LIst';
import Home from './screens/Home';
import Settings from './screens/Settings';
import BottomNavigator from './compontes/BottomNavigator/BottomNavigator';
const Stack = createNativeStackNavigator();
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };
  return (
    <NavigationContainer theme={theme}>

      <Stack.Navigator initialRouteName="Fee">
        <Stack.Screen
          name="Fee"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
