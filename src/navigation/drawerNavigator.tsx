import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../../assets/Colors';
import FeedScreen from '../screens/FeedScreen';
import Feather from "react-native-vector-icons/Feather";
import SavedScreen from '../screens/SavedPostsScreen';
import AboutScreen from '../screens/AboutScreen';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
const CustomMenuIcon = () => {
    const navigation = useNavigation();
    const Drawer = createDrawerNavigator();
    const size = 30;
    const color = Colors.orange;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <View>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerLeft: () => <Feather name='menu' size={size} color={color} onPress={navigation.toggleDrawer} />
                })}
            >
                <Drawer.Screen name='AboutScreen' component={AboutScreen} options={{ headerShown: (false) }} />
                <Drawer.Screen name='SupportScreen' component={SupportScreen} options={{ headerShown: (false) }} />
                <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />
                <Drawer.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: (false) }} />
            </Drawer.Navigator>
        </View>
    );
};

export default CustomMenuIcon;