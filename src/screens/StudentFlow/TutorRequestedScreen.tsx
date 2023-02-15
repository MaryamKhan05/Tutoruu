import React, { useContext } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import Colors from "../../../assets/Colors";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const RequestedScreen: React.FC = () => {
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
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Header headerTitle="FILM 3021 Tutors" />
            <View style={styles.innerContainer}>
                <Image
                    source={require('../../../assets/requested.jpg')}
                    style={styles.image} />
                <Spacer />
                <Text style={[styles.heading]}> {Strings.ST61} </Text>
                <Spacer />
                <Paragraph paragraphText={Strings.ST62} />
                <Spacer />
                <Spacer />
                <Spacer />
                <Card text={Strings.ST63} heading={Strings.ST65} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center'
    },
    innerContainer: {
        width: '80%',
        height: '90%',
        alignSelf: 'center',
        margin: 10,
        marginTop: '30%',
        // backgroundColor: "red"
    },
    text: {
        color: Colors.black,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        // textAlign: 'center',
        width: 284,
        // alignSelf: 'center',
        backgroundColor: 'red'
    },
    heading: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: Colors.orange
    },
    image: {
        alignSelf: 'center',
    }
})

export default RequestedScreen