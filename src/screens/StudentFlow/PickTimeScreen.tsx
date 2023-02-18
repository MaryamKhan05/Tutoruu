import React, { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
const PickTime: React.FC = ({ navigation }) => {
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
        width: wp('99%'),
        height: hp('85%'),
        alignSelf: 'center',
        paddingBottom: hp('2%'),
        // backgroundColor:'red'
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
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
        // backgroundColor:'pink',
        padding: wp('4%')
    },
    activeCard: {
        backgroundColor: Colors.lightorange,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: wp('4%'),
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
    },
    text: {
        fontSize: hp('2%'),
        fontWeight: '500',
        lineHeight: 24
    },
    day: {
        fontSize: hp('2%'),
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.black
    },
    slots: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.orange
    }

})

export default PickTime