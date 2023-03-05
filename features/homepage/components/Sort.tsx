import React, { useState } from 'react';
import { Platform, Image, StyleSheet, Text, View, Touchable } from 'react-native';


const Sort = () => {

    return (
        <View style={styles.container}>
            <View style={styles.sortContainer}>
                <Text style={styles.text}>Sort by</Text>
                <Image source={require('../../../assets/images/dropdown.png')}></Image>
            </View>
            <Image style={styles.filter} source={require('../../../assets/images/filter.png')}></Image>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color:'#5A5A89',
        fontWeight:'400',
        lineHeight: 22,
        letterSpacing: 0.25,
    },
    sortContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap:8,
    },
    filter:{
        marginRight:15,
    }


})

export default Sort;
