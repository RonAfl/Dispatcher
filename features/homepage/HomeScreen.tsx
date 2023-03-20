import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sort from './components/Sort';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <Header/>
                <Sort/>
            </View>
            <View style={styles.mainViewContainer}>
                <MainContent/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mainViewContainer:{
        flex:1,
    },
})

export default HomeScreen;
