import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';

const handleLoginPressed = () => {
    console.log(1, "Login Button Pressed!");
}

const handleSignUpPressed = () => {
    console.log(2, "SIGNUP-> Button Pressed!");
}

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <AppInput label='Your email' isPassword={false}/>
                <AppInput label='Password' isPassword={true}/>
                <AppInput label='Re-Enter Password' isPassword={true}/>
            </View>
            <View style={styles.buttonsContainer}>
                <AuthButton label="SIGNUP ->" bgcolor="#0058B9" onPress={handleSignUpPressed} />
                <AuthButton label="LOGIN" bgcolor="#F1F1F9" onPress={handleLoginPressed} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 250
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
    },
    inputsContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:52,
    }
})

export default LoginScreen;
