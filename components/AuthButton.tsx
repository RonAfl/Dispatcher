import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../utils/const/colors/Colors';
import { SvgXml } from 'react-native-svg';
import rightArrow from '../assets/svgxml/right-arrow';

interface ButtonProps {
    label: string;
    bgcolor: string,
    isArrow: boolean,
    onPress: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({ label, bgcolor, isArrow: isImage, onPress }) => {


    return (
        <Pressable style={[styles.buttonStyle, { backgroundColor: bgcolor }]} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
            {isImage && <SvgXml xml={rightArrow} />}
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