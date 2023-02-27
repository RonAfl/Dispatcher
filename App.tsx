import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppInput from './components/AppInput';
import LoginScreen from './features/auth/LoginScreen';


export default function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <LoginScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
root:{flex:1}
});
