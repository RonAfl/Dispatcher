import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../utils/const/colors/Colors';
import getRightArrow from '../assets/svgxml/right-arrow';

interface ButtonProps {
    label: string;
    bgcolor: string,
    isImage: boolean,
    onPress: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({ label, bgcolor, isImage: isImage, onPress }) => {
    return (
        <Pressable style={[styles.buttonStyle, { backgroundColor: bgcolor }]} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
            {isImage && getRightArrow()}
        </Pressable>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderRadius: 10,
        width: '90%',
        height: 36
    },
    label: {
        textAlign: 'center',
        color: Colors.white,
    }
})
export default AuthButton;