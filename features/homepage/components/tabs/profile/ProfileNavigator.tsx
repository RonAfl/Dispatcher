import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../../ProfileScreen";
import EditScreen from "./EditScreen";
import SettingsScreen from "./SettingsScreen";
import TermsNprivacyScreen from "./TermsNprivacy";

export type ProfileStackParams = {
    Profile: undefined,
    Settings: undefined,
    TermsNprivacy: undefined,
    Edit: undefined,
}
const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

export const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen
                name={'Profile'}
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name={'Settings'}
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name={'TermsNprivacy'}
                component={TermsNprivacyScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name={'Edit'}
                component={EditScreen}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    )
}

