import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import Register from './screens/Register';
import { TransitionSpecs } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: TransitionSpecs.ScaleFromCenterAndroidSpec,
            close: TransitionSpecs.ScaleFromCenterAndroidSpec,
          },
        }}>
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Register'
            component={Register}
          />
        </Stack.Navigator>
      </SafeAreaView>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
