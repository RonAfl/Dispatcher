import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface InputProps {
    label: string,
    isPassword: boolean
}

const AppInput: React.FC<InputProps> = ({ label, isPassword }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container} >
            <TextInput style={styles.inputStyle} placeholder={label} secureTextEntry={isPasswordVisible} />
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
        padding: 8,
        borderColor: '#5A5A89',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: 40,
        paddingLeft: 8,
        lineHeight: 22,
        letterSpacing: 0.25,
        textDecorationColor: '#5A5A89'
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginLeft: 8,
    }
})


export default AppInput;