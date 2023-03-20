import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../../utils/const/colors/Colors';
import getLogo from '../../../assets/svgxml/logo';
import getHeaderIcon from '../../../assets/svgxml/headerIcons';
import { getSearchIcon } from '../../../assets/svgxml/headerIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';

const Header = () => {
    const isNewlike: boolean = useSelector((state: RootState) => state.favorites.newNotification);
    const [notified, setNotified] = useState(isNewlike);
    
    const handleNotificationsPressed = () =>{
        setNotified(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                {getLogo(true)}
                <View style={styles.images1Container}>
                    {getSearchIcon()}
                    <Pressable style={styles.notifications} onPress={handleNotificationsPressed}>
                        {getHeaderIcon(notified)}
                    </Pressable>
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
    images1Container:{
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
