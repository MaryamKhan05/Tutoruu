import React, { useContext } from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native'
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
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20'
    },
    {
        id: 2,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20'
    },
    {
        id: 3,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20'
    },
]
const PickTime: React.FC = ({navigation}) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST57} />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <FlatList
                    data={messageData}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.id} style={[styles.card, { width: 318, height: 69 }]}>
                                <Text style={styles.slots}>{item.slots} {Strings.ST58} </Text>
                                <Text style={styles.text}>{item.day}, {item.date}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Btn text={Strings.ST56} height={48} width={330} route='PickTopic' />
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
        margin: 20,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
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
    slots:{
        fontSize:12,
        fontWeight:'300',
        lineHeight:18,
        color:Colors.orange
    }

})

export default PickTime