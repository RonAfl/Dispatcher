import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../../features/auth/LoginScreen';
import RegisterScreen from '../../../features/auth/RegisterScreen';
import { Screen } from '../Screens/Screens';

export type AuthStackParams = {Login: any; Register: any};
const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen
          name={Screen.REGISTER_PAGE}
          component={RegisterScreen}
          options={{headerShown: false, gestureDirection: 'horizontal'}}
        />
      <AuthStack.Screen
        name={Screen.LOGIN_PAGE}
        component={LoginScreen}
        options={{headerShown: false, gestureDirection: 'horizontal'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
