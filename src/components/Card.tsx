import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Colors from "../../assets/Colors";
import Btn from "./Button";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';

interface Props {
    text: string;
    heading: string;
}

const Card: React.FC<Props> = ({ text, heading }) => {
    const contextState = useContext(LanguageContext);
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
    }
    return (
        <View style={[styles.card]}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.text}> {text} </Text>
            <Btn text={Strings.ST64} height={33} width={81} route={''} />
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
        // alignItems: 'center',
        justifyContent: 'center',
        width: 314,
        height: 185,
        padding: 15,
        // paddingTop:20
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        // backgroundColor:'red'
    },
    heading: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        // backgroundColor:'red'
    }
})

export default Card