import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { getLeftArrow } from "../../../../../../assets/svgxml/topBarIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../../ProfileScreen";
import Colors from "../../../../../../utils/const/colors/Colors";
import { Screen } from "../../../../../../utils/navigation/Screens/Screens";

const TopBar = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
    const onGoBackPressed = () => {
        navigation.navigate(Screen.PROFILE_PAGE);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.goBack} onPress={onGoBackPressed}>
                {getLeftArrow()}
                <Text style={styles.backText}>Back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary900,
        paddingLeft: 16,
        paddingVertical: 21,

    },
    goBack: {
        flexDirection:'row',
        gap:12,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    backText: {
        color: Colors.prof_backText,
        fontSize:16,
    }
})

export default TopBar;