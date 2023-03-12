import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sort from './components/Sort';

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.topViewContainer}>
                <Header/>
                <Sort/>
            </View>

            <View style={styles.mainViewContainer}>
                <MainContent/>
            </View>

            {/* <View style={styles.bottomViewContainer}>
                <Navbar></Navbar>
            </View> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topViewContainer:{
        
    },
    mainViewContainer:{
        flex:1,
    },
    bottomViewContainer:{

    },
})

export default HomeScreen;
