import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import Colors from '../utils/const/colors/Colors';
import { SvgXml } from 'react-native-svg';
import {visiblePassword, unVisiblePassword, passwordIcon} from '../assets/svgxml/password-visibility';

interface InputProps {
    label?: string,
    borderColor: string,
    isPassword: boolean,
    text: string,
    onChange: (value:string) => void
}

const AppInput: React.FC<InputProps> = ({ label, borderColor, isPassword, text: value, onChange}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);
    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const errorColor: ViewStyle = {
        borderColor: borderColor,
    };

    return (
        <View style={[styles.container, errorColor]} >
            <TextInput 
            value={value} 
            onChangeText={onChange} 
            style={[styles.inputStyle, {color: borderColor}]} 
            placeholder={label}
            placeholderTextColor={borderColor} 
            secureTextEntry={isPasswordVisible}
            keyboardType={ isPassword ? 'default' : 'email-address' } />

            {isPassword && <TouchableOpacity onPress={togglePasswordVisibility}>
                {passwordIcon(styles.imageStyle, isPasswordVisible)}
                
            </TouchableOpacity>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 32,
        width: '90%',
        borderWidth: 1,
        minHeight: 44,
        borderRadius: 4,
        borderColor: Colors.primary700,
    },
    inputStyle: {
        flex: 1,
        backgroundColor: Colors.white,
        minHeight: 40,
        paddingLeft: 8,
        marginRight: 8,
        lineHeight: 22,
        letterSpacing: 0.25,
        textDecorationColor: Colors.primary700,
        height:40,
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginRight:8,
    }
})


export default AppInput;