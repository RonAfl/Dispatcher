import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ButtonProps {
    label: string;
    bgcolor: string,
    isImage: boolean,
    onPress: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({ label, bgcolor, isImage, onPress }) => {
    const buttonBackGround: ViewStyle = {
        backgroundColor: bgcolor,
        borderRadius: 10,
        width: '90%',
        height: 36
    };

    return (
            <TouchableOpacity style={[styles.buttonStyle, buttonBackGround]} onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
                {isImage && <Image source={require('../assets/images/RightArrow.png')}></Image>}
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:8,
    },
    label: {
        textAlign: 'center',
        color:'white',
    }
})


export default AuthButton;