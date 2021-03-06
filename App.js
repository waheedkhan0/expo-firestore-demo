import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import LoadingScreen from './screens/LoadingScreen';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} />
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



