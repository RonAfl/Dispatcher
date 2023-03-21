import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, ViewStyle } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';
import auth from '@react-native-firebase/auth';
import { Screen } from '../../utils/navigation/Screens/Screens';
import Colors from '../../utils/const/colors/Colors';
import { ConstantLabels, ConstantText } from '../../utils/const/constantTexts/ConstantText';
import getLogo from '../../assets/svgxml/logo';
import { useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../../utils/navigation/AppNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import emailValidation from '../../utils/functions/emailValidation';
import passwordValidation from '../../utils/functions/passwordValidation';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailColor, setEmailColor] = useState(Colors.black);
    const [passwordColor, setPasswordColor] = useState(Colors.black);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [isHiddenMail, setIsHiddenMail] = useState(true);
    const [isHiddenPass, setisHiddenPass] = useState(true);

    const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

    const handleLoginPressed = () => {
        setIsHiddenMail(true);
        setisHiddenPass(true);
        setEmailColor(Colors.black);
        setPasswordColor(Colors.black);

        const isEmailValid: boolean = emailValidation(email);
        const isPasswordValid: boolean = passwordValidation(password);
        console.log(password.length)

        if (isEmailValid && isPasswordValid) {
            auth().signInWithEmailAndPassword(email, password).then(res => {
                navigation.navigate('Tabs');
                Alert.alert(ConstantText.SUCCESS, ConstantText.SUCCESS_LOGIN_MSG);
            }).catch((error) => {
                if (error.code === ConstantText.WRONG_PASSWORD) {
                    setisHiddenPass(false);
                    setPasswordErrorMessage(ConstantText.WRONG_PASSWORD_ERR_MSG);
                    setPasswordColor(Colors.error_msg);
                }
                else if (error.code === ConstantText.WRONG_EMAIL) {
                    setIsHiddenMail(false);
                    setEmailErrorMessage(ConstantText.WRONG_EMAIL_ERR_MSG);
                    setEmailColor(Colors.error_msg);
                }
                else if (error.code === ConstantText.TOO_MANY_REQUESTS) {
                    setIsHiddenMail(false);
                    setEmailErrorMessage(ConstantText.TOO_MANY_REQUESTS_ERR_MSG);
                    setEmailColor(Colors.error_msg);
                }
                else {
                    Alert.alert(ConstantText.ERROR_ALRT, error.message);
                }
            });
        }
        else {
            if (!isEmailValid) Alert.alert(ConstantText.FAILED_LOGIN, ConstantText.FAILED_LOGIN_ERR_MSG);
            else if (!isPasswordValid) Alert.alert(ConstantText.FAILED_LOGIN, ConstantText.SHORT_PASSWORD);
            else Alert.alert(ConstantText.ALERT, ConstantText.FAILED_LOGIN);
        }
    }

    const handleSignUpPressed = () => {
        navigation.navigate(Screen.REGISTER_PAGE);
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
        <KeyboardAvoidingView style={styles.viewsContainer}>
            <View style={styles.logoContainer}>
                {getLogo(false)}
            </View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{ConstantLabels.LOGIN}</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <AppInput label={ConstantLabels.EMAIL} borderColor={emailColor} isPassword={false} text={email} onChange={setEmail} />
                    <Text style={[styles.messageEmailStyle, isHiddenMail ? HiddenStyle : unHiddenStyle]}>{emailErrorMessage}</Text>
                    <AppInput label={ConstantLabels.PASSWORD} borderColor={passwordColor} isPassword={true} text={password} onChange={setPassword} />
                    <Text style={[styles.messagePasswordStyle, isHiddenPass ? HiddenStyle : unHiddenStyle]}>{passwordErrorMessage}</Text>
                </View>
                <View style={styles.separatorLine} />
                <View style={styles.buttonsContainer}>
                    <AuthButton label={ConstantLabels.LOGIN.toUpperCase()} bgcolor={Colors.button_primary} isImage={true} onPress={handleLoginPressed} />
                    <AuthButton label={ConstantLabels.SIGN_UP.toUpperCase()} bgcolor={Colors.button_secondary} isImage={false} onPress={handleSignUpPressed} />
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
        height: '35%',
        backgroundColor: Colors.primary900,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: Colors.secondary500,
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
        color: Colors.primary700,
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    separatorLine: {
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
        gap: 16,
        marginTop: 50,
    },
    messageEmailStyle: {
        color: Colors.error_msg,
    },
    messagePasswordStyle: {
        color: Colors.error_msg,
    },
})

export default LoginScreen;
