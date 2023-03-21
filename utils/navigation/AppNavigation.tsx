import {  useNavigation } from '@react-navigation/native';
import AuthStackScreen from './stacks/AuthStack';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppTabsScreen from './tabs/AppTabs';
import { Screen } from './Screens/Screens';
import Notifications from '../../features/homepage/components/tabs/homepage/Notifications';

const AppStack = createNativeStackNavigator<AppStackParams>();
export type AppStackParams = {
    Auth: undefined,
    Tabs: undefined,
    Notifications: undefined,
    Dispatch: undefined,
}

export const AppNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribeAuth = auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(login({ email: user.email }));
                navigation.navigate('Tabs');
            } else {
                navigation.navigate('Auth');
            }
        });
        return unsubscribeAuth;
    }, []);

    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name={'Auth'}
                component={AuthStackScreen}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name={'Tabs'}
                component={AppTabsScreen}
                options={{ headerShown: false}}
            />
            <AppStack.Screen
                name={Screen.Notifications}
                component={Notifications} //change to correct screen once built
                options={{ headerShown: false}}
            />
            {/*  <AppStack.Screen
                name={Screen.Dispatch}
                component={HomeScreen} //change to correct screen once built
                options={{ headerShown: false}}
            /> */}
        </AppStack.Navigator>
    )
}