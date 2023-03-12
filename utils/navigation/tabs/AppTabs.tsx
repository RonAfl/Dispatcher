import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../features/homepage/HomeScreen';
import ProfileScreen from '../../../features/homepage/ProfileScreen';
import FavoritesScreen from '../../../features/homepage/FavoritesScreen';
import { Screen } from '../Screens/Screens';
//import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../const/colors/Colors';
import Icon from './components/icon';
import { StyleSheet } from 'react-native';


export type AppTabsParams = {
  Home: any;
  Profile: any;
  Favorites: any;
};

const AppTabs = createBottomTabNavigator<AppTabsParams>();

const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator
      initialRouteName={Screen.HOME_PAGE}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: string = '';

          if (route.name === Screen.HOME_PAGE) {
            iconName = Screen.HOME_PAGE;
          } else if (route.name === Screen.FAV_PAGE) {
            iconName = Screen.FAV_PAGE;
          } else if (route.name === Screen.PROFILE_PAGE) {
            iconName = Screen.PROFILE_PAGE;
          }

          return (
            <Icon iconName={iconName} style={styles.iconStyle} focused={focused} />
          )
        },
        tabBarActiveBackgroundColor: Colors.primary900,
        tabBarInactiveBackgroundColor: Colors.primary900,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {height:65}
      })}>
      <AppTabs.Screen
        name={Screen.PROFILE_PAGE}
        component={ProfileScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <AppTabs.Screen
        name={Screen.HOME_PAGE}
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <AppTabs.Screen
        name={Screen.FAV_PAGE}
        component={FavoritesScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </AppTabs.Navigator>
  );
};

const styles = StyleSheet.create(
  {
    iconStyle: {
      width: 28,
    }
  }
)

export default AppTabsScreen;
