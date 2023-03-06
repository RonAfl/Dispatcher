import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './features/auth/LoginScreen';
import RegisterScreen from './features/auth/RegisterScreen';
import HomeScreen from './features/homepage/HomeScreen';
import store from './redux/store/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App(): JSX.Element {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>    
        <Stack.Navigator>
          <Stack.Screen name="Register"  component={RegisterScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //marginTop:40,
    backgroundColor: '#F8F8FF'
  }
});
