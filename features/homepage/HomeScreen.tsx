import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/tabs/homepage/Header';
import MainContent from './components/tabs/homepage/MainContent';
import Sort from './components/tabs/homepage/Sort';
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
