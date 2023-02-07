import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';

import LanguageContext from '../../src/languages/languageContext';
import FeedScreen from '../../src/screens/FeedScreen';
import AboutScreen from '../../src/screens/AboutScreen';
import Colors from '../../assets/Colors';
import SupportScreen from '../../src/screens/SupportScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';
import SettingsScreen from '../../src/screens/SettingsScreen';
import PaymentScreen from '../../src/screens/PaymentScreen';
import Notification from '../../src/screens/NotificationScreen';
import Edit from '../../src/screens/EditProfileScreen';
import Followers from '../../src/screens/FollowersScreen';
import SearchScreen from '../../src/screens/SearchScreen';
import Bubble from '../../src/components/IconBubble';
import Root from './drawerNavigator';

const Stack = createNativeStackNavigator();
const size = 25;
const color = Colors.orange;
const MainStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Root'>

                <Stack.Screen name='Root' component={Root} options={{ headerShown: (false) }} />
                <Stack.Screen name='Payment' component={PaymentScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='Notification' component={Notification} options={{ headerShown: (false) }} />
                <Stack.Screen name='Edit' component={Edit} options={{ headerShown: (false) }} />
                <Stack.Screen name='Followers' component={Followers} options={{ headerShown: (false) }} />
                <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: (false) }} />
            </Stack.Navigator>
        </NavigationContainer>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MainStack