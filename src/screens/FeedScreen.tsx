import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image } from 'react-native';

import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import { useTailwind } from 'tailwind-rn/dist';
import ToggleButtons from '../components/ToggleButtons';


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

interface Props {
  navigation: any;
}
const FeedScreen: React.FC<Props> = ({ navigation }) => {
  const contextState = useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  
 
  const tw = useTailwind();
  return (
    <View>
      <ToggleButtons/>
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