import React, { useContext } from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const messageData = [
    {
        id: 1,
        status: 'online',
        subject: 'Financial Management',
        code: 'FIN201',
        rating: '4.74',
        sessions: '13'
    },
    {
        id: 2,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13'
    },
    {
        id: 3,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13'
    },
]
const PickClass: React.FC = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
    let Strings: any = {}
  if (contextState != null) {

    const  language = contextState.language
      if (language === 'en') {
          Strings = Languages[0].texts

      }
  }
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST54} />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <FlatList
                    data={messageData}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.id} style={[styles.card, { width: 310, height: 143 }]}>
                                <View style={{ flexDirection: 'row', height: '50%', width: '100%' }}>
                                    <View style={styles.cardInner}>
                                        <Text style={[styles.text, { color: Colors.orange }]}>{item.status}</Text>
                                        <Text style={styles.day}>{item.subject}</Text>
                                        <Text style={styles.fadedGray}>{item.code}</Text>
                                    </View>
                                    <View style={styles.smallerView}>
                                        <View style={{ flexDirection: 'row', }}>

                                            <Text style={styles.rating}>{item.rating}</Text>
                                            <Entypo name="star" size={15} color={Colors.orange} />
                                        </View>
                                        <Text style={[styles.rating]}>{item.sessions} sessions</Text>
                                    </View>
                                </View>
                                <Btn text={Strings.ST55} route={''} width={118} height={33} />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Btn text={Strings.ST56} height={48} width={330} route='PickTime' />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: '99%',
        height: '90%',
        alignSelf: 'center',
        // margin: 10,
        // marginTop: '30%'
    },
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 15,
        margin: 20,
    },
    cardInner: {
        width: '80%',
        height: '60%'
    },
    smallerView: {
        width: '20%',
        height: '60%'
    },
    text: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
    },
    day: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.black
    },
    fadedGray: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        color: Colors.fadedgray
    },
    rating: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 15,
        color: Colors.orange
    },


})

export default PickClass