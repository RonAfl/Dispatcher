import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';
import { KeyboardAvoidingView } from 'react-native';
interface User {
    email: string,
    password: string
}

const LoginScreen = () => {
    const handleLoginPressed = () => {
        console.log(1, "Login Button Pressed!");
    }
    const handleSignUpPressed = () => {
        console.log(2, "SIGNUP-> Button Pressed!");
        if (email.includes('@moveo.co.il') && password === rePassword) {
            console.log(3, email, password, rePassword)
            const USER = { email: email, password: password };
            console.log(USER);
        } else {
            console.log("fix to show the problem!");
            //error message
        }
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    return (
        <KeyboardAvoidingView style={styles.viewsContainer}>
            <View style={styles.container}>


                <View style={styles.inputsContainer}>
                    <AppInput label='Your email' isPassword={false} value={email} onChange={setEmail} />
                    <AppInput label='Password' isPassword={true} value={password} onChange={setPassword} />
                    <AppInput label='Re-Enter Password' isPassword={true} value={rePassword} onChange={setRePassword} />
                </View>
                <View style={styles.buttonsContainer}>
                    <AuthButton label="SIGNUP ->" bgcolor={(email === '' || password === '' || rePassword === '') ? "#6CA4E1" : "#0058B9"} onPress={handleSignUpPressed} />
                    <AuthButton label="LOGIN" bgcolor="#F1F1F9" onPress={handleLoginPressed} />
                </View>

            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        gap:64,
        marginTop: 150,
        backgroundColor: '#F8F8FF',
        

    },
    viewsContainer: {
        flex:1,
        gap: 100
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 52,
    }
})

export default LoginScreen;
