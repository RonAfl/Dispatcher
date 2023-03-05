import React, { useEffect, useState } from 'react';
import { Platform, Image, StyleSheet, Text, View, Touchable } from 'react-native';


const MainContent = () => {
    const [lastLoginData, setlastLoginData] = useState('')

    const handleLastLogin = (data: any) => {
        setlastLoginData(data);
    }

    useEffect(() => {
        handleLastLogin('03:50 PM, 09.03.2022');
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.titlesContainer}>
                <View style={styles.lastLoginContainer}>
                    <Text style={styles.lastLoginTitile}>Last Login: </Text>
                    <Text style={styles.lastLoginText}>{lastLoginData}</Text>
                </View>
                <Text style={styles.mainTitle}>Top Headlines in Israel</Text>
            </View>
            <View style={styles.newsContainer}>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 6,
    },
    titlesContainer: {
        gap: 12,
    },
    lastLoginContainer:{
        flexDirection:'row',
        alignItems:'center'
        
    },
    lastLoginText:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: 0.25,
        color: '#5A5A89',
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        color: '#262146',
    },
    lastLoginTitile: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: 0.25,
        color: '#5A5A89',
    },
    newsContainer: {
        flex: 1,
    }
})

export default MainContent;
