import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppInput from '../../components/AppInput'


const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <AppInput></AppInput>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default LoginScreen;
