import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";


import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import PaymentTag from "./PaymentTag";

interface Props {
    text: string;
}
const PaymentCard: React.FC<Props> = ({ text }) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <View style={[styles.card, { width: 314, height: 110 }]}>
            <PaymentTag text={text} />
            <Text style={[styles.text, { color: Colors.orange }]}>{Strings.ST45} </Text>
            <Text style={styles.day}>{Strings.ST46}</Text>
            <Text style={styles.text}>{Strings.ST47}</Text>
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
        padding: 15,
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