import React, { useState } from 'react';
import { Platform, Image, StyleSheet, Text, View, Touchable } from 'react-native';
import Colors from '../../../utils/const/colors/Colors';


const Navbar = () => {
    const [notified, setNotified] = useState(false);

    const handleNotifications = () => {
        setNotified(true);
    }
   
    

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/profile.png')}></Image>

            <Image style={styles.image} source={require('../../../assets/images/homeChosen.png')}></Image>

            <Image style={styles.image} source={require('../../../assets/images/favorites.png')}></Image>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary900,
        paddingVertical: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'

    },
    image:{

    }
})

export default Navbar;
