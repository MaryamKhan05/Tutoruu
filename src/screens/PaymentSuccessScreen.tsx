import React, { useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Completion from "../components/Completion";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import PaymentCard from "../components/PaymentCard";
import Spacer from "../components/Spacer";


import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
const SuccessScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Spacer />
            <Header headerTitle="Payment" />
            <View style={styles.innerContainer}>
                <Completion image={require('../../assets/payment.jpg')} text={Strings.ST41} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={[styles.text, { marginLeft: '5%' }]}> {Strings.ST42} </Text>
                    <Text style={[styles.text, { marginRight: '5%', fontWeight: 'bold' }]}>324 ECP</Text>
                    <Text style={styles.text}> {Strings.ST43} </Text>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{Strings.ST44} </Text>
                </View>
                <Spacer />
                <Divider />
                <Spacer />
                <Spacer />
                <PaymentCard />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: '99%',
        height: '100%',
        alignSelf: 'center',
        // justifyContent: 'center',
        margin: 10,
        marginTop: '30%'
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: Colors.black,
    },

})

export default SuccessScreen