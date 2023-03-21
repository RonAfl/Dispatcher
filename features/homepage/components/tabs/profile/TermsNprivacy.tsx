import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../../../../utils/const/colors/Colors";
import { ConstantText } from "../../../../../utils/const/constantTexts/ConstantText";
import TopBar from "./components/TopBar";
import { ProfileStackParams } from "./ProfileNavigator";

const TermsNprivacyScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarActiveBackgroundColor: Colors.primary900,
            tabBarInactiveBackgroundColor: Colors.primary900,
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.gray,
            tabBarStyle: { height: 65 }
        });
    }, [navigation]);
    
    return (
        <View  style={styles.container}>
            <TopBar />
            <View>
                <Text style={styles.title}>
                    {ConstantText.TERMS_N_PRIVACY_TITLE}
                </Text>
            </View>
            <ScrollView style={styles.mainContentContainer}>
                <Text style={styles.mainContent}>
                    {ConstantText.TERMS_N_PRIVACY_CONTENT_TEXT}
                </Text>
                <Text style={styles.mainContent}>
                    {ConstantText.TERMS_N_PRIVACY_CONTENT_TEXT}
                </Text>
                <Text style={styles.mainContent}>
                    {ConstantText.TERMS_N_PRIVACY_CONTENT_TEXT}
                </Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        color: Colors.primary900,
        paddingTop: 12,
        paddingLeft: 16,
    },
    mainContentContainer: {
        paddingHorizontal: 18,
    },
    mainContent: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: Colors.text,
        marginTop: 12,
    }
})
export default TermsNprivacyScreen;