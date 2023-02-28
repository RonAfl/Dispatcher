import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ButtonProps {
    label: string;
    bgcolor: string,
    onPress: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({ label, bgcolor, onPress }) => {
    const buttonBackGround: ViewStyle = {
        backgroundColor: bgcolor,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        height: 36
    };

    return (
            <TouchableOpacity style={[styles.buttonStyle, buttonBackGround]} onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignContent: 'center',
        justifyContent: 'center',
       
    },
    label: {
        textAlign: 'center'
    }
})


export default AuthButton;