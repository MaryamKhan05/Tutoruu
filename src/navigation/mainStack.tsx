import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PaymentScreen from '../../src/screens/PaymentScreen';
import Notification from '../../src/screens/NotificationScreen';
import Edit from '../../src/screens/EditProfileScreen';
import Followers from '../../src/screens/FollowersScreen';
import SearchScreen from '../../src/screens/SearchScreen';
import Root from './drawerNavigator';
import SuccessScreen from '../screens/PaymentSuccessScreen';
import FailedScreen from '../screens/PaymentFailedScreen';

const Stack = createNativeStackNavigator();
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
                <Stack.Screen name='Success' component={SuccessScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='Failed' component={FailedScreen} options={{ headerShown: (false) }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack