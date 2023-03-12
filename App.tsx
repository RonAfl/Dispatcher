import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { AppNavigation } from './utils/navigation/AppNavigation';
import Colors from './utils/const/colors/Colors';

export default function App(): JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
      <NavigationContainer>

        <AppNavigation/>
      </NavigationContainer>

      </SafeAreaView>
    </Provider>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary_bg,
  }
});
