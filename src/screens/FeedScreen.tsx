import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../../assets/Colors';
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import AboutScreen from './AboutScreen';
import SupportScreen from './SupportScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import { useTailwind } from 'tailwind-rn/dist';

const size = 30;
const color = Colors.orange;
const Drawer = createDrawerNavigator();

const messageData = [
  {
    id: 1,
    sender: 'John',
    text: 'Hey, how are you?',
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
  },
  {
    id: 2,
    sender: 'Jane',
    text: "I'm doing well, thanks for asking. How about you?",
    senderType: 'other',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
  },
  {
    id: 3,
    sender: 'John',
    text: "I'm doing well too. Do you want to grab a coffee later?",
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    image: 'https://www.bootdey.com/image/580x580/008000/000000',
  },
]

const Screen1: React.FC = () => {
  return (
    <Text>screen 1 </Text>
  )
}
const Screen2: React.FC = () => {
  return (
    <Text>screen 2 </Text>
  )
}
const Screen3: React.FC = () => {
  return (
    <Text>screen 3</Text>
  )
}
const Screen4: React.FC = () => {
  return (
    <Text>screen 4 </Text>
  )
}
const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <Text style={styles.sender}>{item.sender}</Text>
      </View>
      <View style={styles.cardBody}>
        {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    </View>
  )
}
const FeedScreen: React.FC = ({ navigation }) => {
  const contextState = useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  
  const [selectedData, setSelectedData] = useState(Screen1);
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);
  const tw = useTailwind();
  return (
    <View>
      <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: focused1 ? Colors.lightorange : Colors.background }]} onPress={() => {
          setSelectedData(Screen1);
          setFocused1(true);
          setFocused2(false);
          setFocused3(false);
          setFocused4(false);
        }}>
          <Text style={{ color: focused1 ? Colors.orange : Colors.black }} >Screen1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: focused2 ? Colors.lightorange : Colors.background }]} onPress={() => {
          setSelectedData(Screen2);
          setFocused1(false);
          setFocused2(true);
          setFocused3(false);
          setFocused4(false);
        }}>
          <Text style={{ color: focused2 ? Colors.orange : Colors.black }}>Screen2 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: focused3 ? Colors.lightorange : Colors.background }]} onPress={() => {
          setSelectedData(Screen3);
          setFocused1(false);
          setFocused2(false);
          setFocused3(true);
          setFocused4(false);
        }}>
          <Text style={{ color: focused3 ? Colors.orange : Colors.black }}>Screen3 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: focused4 ? Colors.lightorange : Colors.background }]} onPress={() => {
          setSelectedData(Screen4);
          setFocused1(false);
          setFocused2(false);
          setFocused3(false);
          setFocused4(true);
        }}>
          <Text style={{ color: focused4 ? Colors.orange : Colors.black }}>Screen4</Text>
        </TouchableOpacity>
      </View>
      <Text>{selectedData}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messageData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 40,
  },
  storyList: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  storyListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
  btn: {
    padding: 12,
    margin: 10,
    borderRadius: 99
  },
})


export default FeedScreen;