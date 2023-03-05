import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';

interface InputProps {
    label?: string,
    borderColor: string,
    isPassword: boolean,
    value: string,
    onChange: (value:string) => void
}



const AppInput: React.FC<InputProps> = ({ label, borderColor, isPassword, value, onChange}) => {
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
            secureTextEntry={isPasswordVisible} />

            {isPassword && <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image
                    style={styles.imageStyle}
                    source={
                        isPasswordVisible
                            ? require('../assets/images/eye-unvisible.png')
                            : require('../assets/images/eye-visible.png')
                    } />
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
        borderColor: '#5A5A89',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: 40,
        paddingLeft: 8,
        marginRight: 8,
        lineHeight: 22,
        letterSpacing: 0.25,
        textDecorationColor: '#5A5A89',
        height:40,
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginRight:8,
    }
})


export default AppInput;