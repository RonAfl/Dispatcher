import React, { useState } from 'react';
import { Platform, Alert, Image, StyleSheet, Text, View, KeyboardAvoidingView, ViewStyle } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const [emailColor, setEmailColor] = useState('#000000');
    const [passwordColor, setPasswordColor] = useState('#000000');

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [isHiddenMail, setIsHiddenMail] = useState(true);
    const [isHiddenPass, setisHiddenPass] = useState(true);

    const handleLoginPressed = () => {
        console.log(2, "Login Button Pressed!");
    }

    const handleSignUpPressed = () => {
        console.log(1, "SIGNUP-> Button Pressed!");
        const isEmailValid: boolean = EmailValidation(email);
        const isPasswordValid: boolean = PasswordValidation(password, rePassword);
        setIsHiddenMail(true);
        setisHiddenPass(true);
        setEmailColor('#000000');
        setPasswordColor('#000000');

        if (isPasswordValid && isEmailValid) {

            const USER = { email: email, password: password };
            auth().createUserWithEmailAndPassword(USER.email, USER.password).then(res => {

                Alert.alert("Success", "Signed up!");
                console.log(2, res);

            }).catch((error) => {

                if (error.code === 'auth/email-already-in-use') {
                    setIsHiddenMail(false);
                    setEmailErrorMessage('Email address is already in use');
                    setEmailColor('#FD5959');
                }
                else if (error.code === 'auth/invalid-email') {
                    setIsHiddenMail(false);
                    setEmailErrorMessage('Email address must be provided');
                    setEmailColor('#FD5959');
                }
                else if (error.code === 'auth/weak-password') {
                    setisHiddenPass(false);
                    setPasswordErrorMessage('Password is too weak');
                    setPasswordColor('#FD5959');
                } else {
                    // Some other error occurred
                    Alert.alert('Error', error.message);
                }
            });
        }
        else {
            if (!isPasswordValid) {
                setisHiddenPass(false);
                setPasswordErrorMessage('Passwords do not match / password length > 8');
                setPasswordColor('#FD5959');
            }
            if(!isEmailValid){
                setIsHiddenMail(false);
                setEmailErrorMessage('Email address is not valid');
                setEmailColor('#FD5959');
            }
        }
    }


    const EmailValidation = (email: string): boolean => {
        return emailRegex.test(email);
    }

    const PasswordValidation = (password: string, rePassword: string): boolean => {
        return ((password === rePassword) && password.length >= 8);
    }


    const unHiddenStyle: ViewStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 10,
    };

    const HiddenStyle: ViewStyle = {
        display: 'none',

    };

    return (
        <KeyboardAvoidingView style={styles.viewsContainer} behavior='height' keyboardVerticalOffset={100}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/logo.png')}></Image>
            </View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Signup</Text>
                </View>

                <View style={styles.inputsContainer}>
                       
                        <AppInput label='Your email' borderColor={emailColor} isPassword={false} value={email} onChange={setEmail} ></AppInput>
                        <Text style={[styles.messageEmailStyle, isHiddenMail ? HiddenStyle : unHiddenStyle]}>{emailErrorMessage}</Text>
              
                        <AppInput label='Password' borderColor={passwordColor} isPassword={true} value={password} onChange={setPassword} />
                        <Text style={[styles.messagePasswordStyle, isHiddenPass ? HiddenStyle : unHiddenStyle]}>{passwordErrorMessage}</Text>
                    <AppInput label='Re-Enter Password' borderColor={passwordColor} isPassword={true} value={rePassword} onChange={setRePassword} />
                </View>
                <View style={styles.hr} />
                <View style={styles.buttonsContainer}>
                    <AuthButton label="SIGNUP" bgcolor="#6CA4E1" isImage={true} onPress={handleSignUpPressed} />
                    <AuthButton label="LOGIN" bgcolor="#D9DBE9" isImage={false} onPress={handleLoginPressed} />
                </View>

            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    viewsContainer: {
        flex: 1,
        marginTop: Platform.OS==='ios' ? '14%' : 0,
    },
    messageEmailStyle: {
        color: '#FD5959',
    },
    messagePasswordStyle: {
        color: '#FD5959'
    },
    logoContainer: {
        height: '35%',
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
        marginBottom: 52,
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    hr: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        opacity: 0.1,
        marginTop: '17%',
        width: '90%',
        height: 1,
        backgroundColor: '#000000'
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
        marginTop: '10%',

    },
})

export default RegisterScreen;
