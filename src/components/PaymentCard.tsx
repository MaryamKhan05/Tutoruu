import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";


import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
const PaymentCard: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <View style={[styles.card, { width: 314, height: 110 }]}>
            <Text style={[styles.text, { color: Colors.orange }]}>{Strings.ST45} </Text>
            <Text style={styles.day}>{Strings.ST46}</Text>
            <Text style={styles.text}>online</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        // alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,

    },
    day: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.black
    },

})

export default PaymentCard