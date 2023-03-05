import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './features/auth/LoginScreen';
import RegisterScreen from './features/auth/RegisterScreen';


export default function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <RegisterScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
root:{
  flex:1,
  //marginTop:40,
  backgroundColor:'#F8F8FF'
}
});
