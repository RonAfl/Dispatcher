import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../../../../utils/const/colors/Colors';
import getLogo from '../../../../../assets/svgxml/logo';
import getHeaderIcon from '../../../../../assets/svgxml/headerIcons';
import { getSearchIcon } from '../../../../../assets/svgxml/headerIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store/store';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../../../../utils/navigation/Screens/Screens';
import { NotificationInterface, notificationsOff } from '../../../../../redux/slices/favsSlice';

const Header = () => {
    const [notified, setNotified] = useState(false);
    const isNewlike: boolean = useSelector((state: RootState) => state.favorites.newNotification);
    const notifications: NotificationInterface[] = useSelector((state: RootState) => state.favorites.notifications);
    const navigation = useNavigation();
    const dispatch= useDispatch();

    useEffect(()=>{
        setNotified(true);
    },[notifications])

    const handleNotificationsPressed = () =>{
        setNotified(false);
        dispatch(notificationsOff());
        navigation.navigate(Screen.Notifications);
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
