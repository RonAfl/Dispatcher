import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, ViewStyle } from 'react-native';
import AppInput from '../../components/AppInput'
import AuthButton from '../../components/AuthButton';
import auth from '@react-native-firebase/auth';
import { Screen } from '../../utils/navigation/Screens/Screens';
import Colors from '../../utils/const/colors/Colors';
import { ConstantLabels, ConstantText } from '../../utils/const/constantTexts/ConstantText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParams } from '../../utils/navigation/AppNavigation';
import getLogo from '../../assets/svgxml/logo';

const RegisterScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const [emailColor, setEmailColor] = useState(Colors.black);
    const [passwordColor, setPasswordColor] = useState(Colors.black);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [isHiddenMail, setIsHiddenMail] = useState(true);
    const [isHiddenPass, setisHiddenPass] = useState(true);

    const handleLoginPressed = () => {
        navigation.navigate(Screen.LOGIN_PAGE);
    }

    const handleSignUpPressed = () => {
        const isEmailValid: boolean = emailValidation(email);
        const isPasswordValid: boolean = passwordValidation(password, confirmPassword);
        setIsHiddenMail(true);
        setisHiddenPass(true);
        setEmailColor(Colors.black);
        setPasswordColor(Colors.black);

        if (isPasswordValid && isEmailValid) {
            auth().createUserWithEmailAndPassword(email, password).then(res => {
                res.user.updateProfile({
                    displayName:'yuda'
                });

                navigation.navigate('Tabs');
                Alert.alert(ConstantText.SUCCESS, ConstantText.SUCCESS_SIGNUP_MSG);

            }).catch((error) => {
                if (error.code === ConstantText.EMAIL_IN_USE) {
                    setIsHiddenMail(false);
                    setEmailErrorMessage(ConstantText.EMAIL_IN_USE_ERR_MSG);
                    setEmailColor(Colors.error_msg);
                }
                else if (error.code === ConstantText.INVALID_EMAIL) {
                    setIsHiddenMail(false);
                    setEmailErrorMessage(ConstantText.INVALID_EMAIL_ERR_MSG);
                    setEmailColor(Colors.error_msg);
                }
                else if (error.code === ConstantText.WEAK_PASSWORD) {
                    setisHiddenPass(false);
                    setPasswordErrorMessage(ConstantText.WEAK_PASSWORD_ERR_MSG);
                    setPasswordColor(Colors.error_msg);
                } else {
                    // Some other error occurred
                    Alert.alert(ConstantText.ERROR_ALRT, error.message);
                }
            });
        }
        else {
            if (!isPasswordValid) {
                setisHiddenPass(false);
                setPasswordErrorMessage(ConstantText.INVALID_PASSWORD_MSG);
                setPasswordColor(Colors.error_msg);
            }
            if (!isEmailValid) {
                setIsHiddenMail(false);
                setEmailErrorMessage(ConstantText.INVALID_EMAIL_MSG);
                setEmailColor(Colors.error_msg);
            }
        }
    }

    const emailValidation = (email: string): boolean => {
        return emailRegex.test(email);
    }

    const passwordValidation = (password: string, rePassword: string): boolean => {
        return ((password === rePassword) && password.length >= ConstantText.PASSWORD_MAX_LENGTH);
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
            {getLogo(false)}

            </View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{ConstantLabels.SIGN_UP}</Text>
                </View>

                <View style={styles.inputsContainer}>

                    <AppInput label={ConstantLabels.EMAIL} borderColor={emailColor} isPassword={false} text={email} onChange={setEmail} ></AppInput>
                    <Text style={[styles.messageEmailStyle, isHiddenMail ? HiddenStyle : unHiddenStyle]}>{emailErrorMessage}</Text>

                    <AppInput label={ConstantLabels.PASSWORD} borderColor={passwordColor} isPassword={true} text={password} onChange={setPassword} />
                    <Text style={[styles.messagePasswordStyle, isHiddenPass ? HiddenStyle : unHiddenStyle]}>{passwordErrorMessage}</Text>
                    <AppInput label={ConstantLabels.CONFIRM_PASSWORD} borderColor={passwordColor} isPassword={true} text={confirmPassword} onChange={setConfirmPassword} />
                </View>
                <View style={styles.separatorLine} />
                <View style={styles.buttonsContainer}>
                    <AuthButton label={ConstantLabels.SIGN_UP.toUpperCase()} bgcolor={Colors.button_primary} isArrow={true} onPress={handleSignUpPressed} />
                    <AuthButton label={ConstantLabels.LOGIN.toUpperCase()} bgcolor={Colors.button_secondary} isArrow={false} onPress={handleLoginPressed} />
                </View>

            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    viewsContainer: {
        flex: 1,
    },
    messageEmailStyle: {
        color: Colors.error_msg,
    },
    messagePasswordStyle: {
        color: Colors.error_msg,
    },
    logoContainer: {
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
        marginBottom: 52,
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    separatorLine: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        opacity: 0.1,
        marginTop: '14%',
        width: '90%',
        height: 1,
        backgroundColor: Colors.black,
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16,
        marginTop: '7.5%',

    },
})

export default RegisterScreen;
