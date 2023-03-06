import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './features/auth/LoginScreen';
import RegisterScreen from './features/auth/RegisterScreen';
import HomeScreen from './features/homepage/HomeScreen';
import store from './redux/store/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        {/* <RegisterScreen /> */}
        <HomeScreen/>
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
