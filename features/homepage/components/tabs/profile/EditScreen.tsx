import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../../../../utils/const/colors/Colors";
import { Screen } from "../../../../../utils/navigation/Screens/Screens";
import EditTopBar from "./components/EditTopBar";
import ProfilePage from "./components/ProfilePage";
import TopBar from "./components/TopBar";
import { ProfileStackParams } from "./ProfileNavigator";

const EditScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
    const editingProfile = useSelector((state) => state.profile.editingProfile);

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
        <View>
            {editingProfile ? <EditTopBar /> : <TopBar/>}
            <ProfilePage/>

        </View>
    )
}

export default EditScreen;