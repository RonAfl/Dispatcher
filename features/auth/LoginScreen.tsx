import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {

    const handleLoginPressed = () => {
        console.log(2, "Login Button Pressed!");
        const isEmailValid: boolean = EmailValidation(email);
        const isPasswordValid: boolean = PasswordValidation(password);
        if (isEmailValid && isPasswordValid) {
            const USER = { email: email, password: password };
            auth().signInWithEmailAndPassword(USER.email, USER.password).then(res => {
                console.log(res);
                navigation.navigate('Home');
                Alert.alert('Success', 'Logged In!' );
            }).catch((error) => {
                    // Some other error occurred
                    Alert.alert('Error', error.message);
                }
            )
        }
        else {
            if (!isEmailValid) Alert.alert('Failed to signup user!', 'Email is not valid!');
            else if (!isPasswordValid) Alert.alert('Failed to signup user!', 'password is too short');
            else Alert.alert('Alert!', 'Couldnt signup for some reason!');
        }
    }

    const handleSignUpPressed = () => {
        console.log(1, "SIGNUP-> Button Pressed!");
        navigation.navigate('Register')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const EmailValidation = (email: string): boolean => {
        return emailRegex.test(email);
    }

    const PasswordValidation = (password: string): boolean => {
        return password.length >= 8;
    }

    return (
        <KeyboardAvoidingView style={styles.viewsContainer}>

            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/logo.png')}></Image>
            </View>

            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <AppInput label='Your email' isPassword={false} value={email} onChange={setEmail} />
                    <AppInput label='Password' isPassword={true} value={password} onChange={setPassword} />
                </View>

                <View style={styles.hr} />

                <View style={styles.buttonsContainer}>
                    <AuthButton label="LOGIN" bgcolor="#6CA4E1" isImage={true} onPress={handleLoginPressed} />
                    <AuthButton label="SIGNUP" bgcolor="#F1F1F9" isImage={false} onPress={handleSignUpPressed} />
                </View>
            </View>

        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    viewsContainer: {
        flex: 1,
    },
    logoContainer: {
        minHeight: 250,
        height: '30%',
        backgroundColor: "#262146",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#F8F8FF',
    },
    titleContainer: {
        paddingTop: 40,
        paddingLeft: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 22,
        alignItems: "center",
        color: "#5A5A89",
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    hr: {
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        opacity: 0.1,
        marginTop: 50,
        width: '90%'
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
        marginTop: 50,

    },
})

export default LoginScreen;
