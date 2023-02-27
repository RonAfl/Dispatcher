import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AppInput = () => {
    return (
        <View style={styles.container} >
            <TextInput style={styles.inputStyle} placeholder='Your email'></TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },
    inputStyle: {
        flex: 1,
        padding: 8,
        width: '80%',
        maxHeight: 44,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
        borderColor: '#5A5A89',
        textDecorationColor: '#5A5A89,'
    }
})


export default AppInput;