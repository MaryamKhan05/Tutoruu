import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";



import Colors from '../../assets/Colors';
import Completion from "../components/Completion";
import Spacer from "../components/Spacer";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';


const PaymentScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Completion image={require('../../assets/payment.jpg')} imageStyle={styles.image} text={Strings.ST23} textStyle={styles.heading} />
                <Text style={styles.text}> {Strings.ST22} </Text>
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
        width: '95%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10
    },
    back: {
        fontSize: 18,
        marginLeft: 22
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
    image: {
        height: 106,
        width: 106,
        alignSelf: 'center',
    },
    heading: {
        color: Colors.orange,
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',

    },
    text: {
        color: Colors.black,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        textAlign: 'center',
        width: 284,
        alignSelf: 'center'
    }
});
export default PaymentScreen