import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '../../../utils/const/colors/Colors';
import { SvgXml } from 'react-native-svg';
import getLogo from '../../../assets/svgxml/logo';
import getHeaderIcon from '../../../assets/svgxml/headerIcons';
import { getSearchIcon } from '../../../assets/svgxml/headerIcons';

const Header = () => {
    const [notified, setNotified] = useState(false);

    const handleNotifications = () => {
        setNotified(!notified);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                {getLogo(true)}
                <View style={styles.imagesContainer}>
                    {getSearchIcon()}
                    <View style={styles.notifications}>
                        {getHeaderIcon(!notified)}
                    </View>
                </View>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary900,
        paddingLeft: 16,
        paddingVertical: 21,

    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8,
        gap: 16,
    },
    notifications: {
        position: 'relative'
    },
})

export default Header;
