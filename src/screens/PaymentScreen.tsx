import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";



import Colors from '../../assets/Colors';
import Completion from "../components/Completion";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Spacer from "../components/Spacer";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';


const PaymentScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle="Payment" />
            <View style={styles.innerContainer}>
                <Completion image={require('../../assets/payment.jpg')}  text={Strings.ST23} />
                <Paragraph paragraphText={Strings.ST22} />  
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
    
});
export default PaymentScreen