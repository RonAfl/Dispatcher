import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import getIcon from '../../assets/svgxml/iconSvgSelector';
import getProfile from '../../assets/svgxml/profilePicture';
import Colors from '../../utils/const/colors/Colors';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen } from '../../utils/navigation/Screens/Screens';
import { ConstantLabels } from '../../utils/const/constantTexts/ConstantText';

export type ProfileStackParams = {
    profile: undefined,
    Settings: undefined,
    termsNprivacy: undefined,
    edit: undefined,
}

const ProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

    const onEditProfilePresses = () => {
        console.log('pressed');
        navigation.navigate(Screen.Edit_Profile);
    }

    const onSettingsPressed = () => {
        console.log('settings pressed');
        navigation.navigate(Screen.Settings);
    }

    const onTermsPressed = () => {
        console.log('terms n privacy pressed');
        navigation.navigate(Screen.Terms_And_Privacy);

    }

    const getUserName = () => {
        return auth().currentUser?.displayName;
    }

    const onLogoutPressed = () => {
        auth().signOut().then((res) => {
            console.log(res);
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.title}>Hi {getUserName()}</Text>
                        <Pressable onPress={onEditProfilePresses}>
                            <Text style={styles.subTitle}>{ConstantLabels.EDIT_PROFILE}</Text>
                        </Pressable>
                    </View>
                    {/* false for small icon - true for big icon */}
                    {getProfile(false)}
                </View>
                <View style={styles.pageContainer}>
                    <View style={styles.settings}>
                        <Pressable style={styles.settingsButton} onPress={onSettingsPressed}>
                            {getIcon('settings')}
                            <Text style={styles.settingsTitle}>{ConstantLabels.SETTINGS}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.termsNprivacy}>
                        <Pressable style={styles.termsNprivacyButton} onPress={onTermsPressed}>
                            {getIcon('termsNprivacy')}
                            <Text style={styles.termsNprivacyTitle}>{ConstantLabels.TERMS_N_PRIVACY}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.logoutButton} onPress={onLogoutPressed}>
                            {getIcon('logout')}
                            <Text style={styles.logoutTitle}>{ConstantLabels.LOGOUT}</Text>
                        </Pressable>
                    </View>
                </View >
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    },
    pageContainer: {
        padding: 16,
        flexDirection: 'column',
        gap: 12,
        alignContent: 'center'
    },
    settingsTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 32,
        color: Colors.primary900,
    },
    termsNprivacyTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 32,
        color: Colors.primary900,
    },
    logoutTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 32,
        color: Colors.primary900,
    },
    settings: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        paddingBottom: 2,
    },
    termsNprivacy: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        paddingBottom: 2,
    },
    title: {
        fontWeight: '500',
        fontSize: 24,
        color: Colors.primary900,
        lineHeight: 32
    },
    subTitle: {
        color: Colors.secondary2900,
        fontWeight: '400',
        fontSize: 14,
    },
    settingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    },
    termsNprivacyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    }
})

export default ProfileScreen;