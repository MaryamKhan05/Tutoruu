import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';



import LanguageContext from './src/languages/languageContext';
import FeedScreen from './src/screens/FeedScreen';
import AboutScreen from './src/screens/AboutScreen';
import Colors from './assets/Colors';
import SavedScreen from './src/screens/SavedPostsScreen';
import CustomMenuIcon from './src/navigation/drawerNavigator';
import SupportScreen from './src/screens/SupportScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import Notification from './src/screens/NotificationScreen';

type RootStackParamList = {
  FeedScreen: undefined;
};
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const size = 25;
const color = Colors.orange;

const Root: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName='Feed'
      screenOptions={({ navigation }) => ({
        headerLeft: () => <Feather name='menu' size={size} color={color} style={{ marginLeft: 10 }} onPress={navigation.toggleDrawer} />
      })}

    >
      <Drawer.Screen name='Feed' component={FeedScreen} options={{

        headerTitle: "tutoruu", headerRight: () => [<View style={styles.icon} >
          <TouchableOpacity>
            <FontAwesome name="bell-o" size={size} color={color} style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate('Notification')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="search" size={size} color={color} />
          </TouchableOpacity>
        </View>
        ]

      }} />
      <Drawer.Screen name='Profile' component={ProfileScreen} options={{
        drawerIcon: ({ focused, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={Colors.black}
          />
        )
      }} />
      <Drawer.Screen name='Settings' component={SettingsScreen} options={{
        headerShown: (false), drawerIcon: ({ focused, size }) => (
          <Fontisto
            name="player-settings"
            size={size}
            color={Colors.black}
          />
        )
      }} />
      <Drawer.Screen name='About' component={AboutScreen} options={{
        headerShown: (false), drawerIcon: ({ focused, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={Colors.black}
          />
        )
      }} />
      <Drawer.Screen name='Support' component={SupportScreen} options={{
        headerShown: (false), drawerIcon: ({ focused, size }) => (
          <FontAwesome
            name="warning"
            size={size}
            color={Colors.black}
          />
        )
      }} />

    </Drawer.Navigator>
  )
}

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Root'>
          <Stack.Screen name="Feed" component={FeedScreen} options={{
            headerTitle: "tutoruu", headerRight: () => (
              [<TouchableOpacity>
                <FontAwesome name="bell-o" size={size} color={color} />
              </TouchableOpacity>,
              <TouchableOpacity>
                <FontAwesome name="search" size={size} color={color} />
              </TouchableOpacity>]
            ),
          }} />
          <Stack.Screen name='Root' component={Root} options={{ headerShown: (false) }} />
          <Stack.Screen name='Payment' component={PaymentScreen} />
          <Stack.Screen name='Notification' component={Notification} options={{headerShown:(false)}} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    marginRight: 10
  },
});



const defaultLanguage = 'en';

const MyApp = () => {
  return (
    <LanguageContext.Provider value={{ language: defaultLanguage }}>



      <App />

    </LanguageContext.Provider>
  );
};

export default MyApp;
// export default App;