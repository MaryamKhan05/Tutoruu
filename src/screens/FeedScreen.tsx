import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTailwind } from 'tailwind-rn/dist'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Languages from '../languages'
import LanguageContext from '../languages/languageContext'
import ToggleButtons from '../components/ToggleButtons'
import Username from '../components/UserName'
import Spacer from '../components/Spacer'
import Colors from '../../assets/Colors'
import CreatePost from '../components/CreatePost'

const size = 20;
const color = Colors.fadedgray;

const messageData = [
  {
    id: 1,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: 'Lorem ipsum dolor sit amit dolor connectsur?',
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
  },
  {
    id: 2,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'other',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
  },
  {
    id: 3,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    image: 'https://www.bootdey.com/image/580x580/008000/000000',
  },
]

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{ justifyContent: 'center', padding: 10 }}>

        <View style={styles.cardHeader}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <View style={{ width: '70%', }} >
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={[styles.sender, { color: Colors.orange, marginLeft: 10 }]}>{item.email}</Text>
            </View>
            <Text style={styles.sender}>{item.text}</Text>


            <View style={styles.iconContainer}>
              <TouchableOpacity>

                <MaterialCommunityIcons
                  name='message-outline'
                  size={size}
                  color={Colors.fadedgray}
                />
              </TouchableOpacity>

              <AntDesign
                name='like2'
                size={size}
                color={color}
              />
              <AntDesign
                name='dislike2'
                size={size}
                color={color}
              />
              <Feather
                name='bookmark'
                size={size}
                color={color}
              />

            </View>


          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
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
    <View style={styles.container}>
      <Username />
      <ToggleButtons />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Spacer />

        <CreatePost />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messageData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,

  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    backgroundColor: 'red'
  },
  btn: {
    padding: 12,
    margin: 10,
    borderRadius: 99
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    // marginLeft:'10%'
    marginTop: 10
  }
})


export default FeedScreen;