import React, {useState} from 'react';
import { Platform, Image, StyleSheet, Text, View, Touchable } from 'react-native';


const Header = () => {
    const [notified, setNotified] = useState(false);

    const handleNotifications = () => {
        setNotified(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                <Image style={styles.logoImage} source={require('../../../assets/images/logo.png')}></Image>

                <View style={styles.imagesContainer}>
                    <Image style={styles.icon} source={require('../../../assets/images/search.png')}></Image>
                    <View style={styles.notifications}>
                    {!notified && <Image style={styles.ping} source={require('../../../assets/images/pingedNotification.png')}></Image>}
                        <Image style={styles.icon} source={require('../../../assets/images/notifications.png')}></Image>
                    </View>
                </View>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262146',
        paddingLeft: 16,
        paddingVertical: 21,
        marginTop: Platform.OS === 'ios' ? '9%' : 0,

    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoImage: {
        width: 40,
        height: 31
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    notifications:{
        position: 'relative'
    },
    ping: {
        position:'absolute',
        left: 11,
        top: -2.5,
        zIndex:1,
    }
})

export default Header;
