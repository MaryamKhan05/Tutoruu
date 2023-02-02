import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";



import Colors from '../../assets/Colors';
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';

const AboutScreen: React.FC = ({ navigation }) => {

    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST11} headerStyle={styles.header} />
            <View style={{ marginTop: '70%' }}>
                <Image source={require('../../assets/logo.jpg')} style={styles.image} />
                <Paragraph paragraphStyle={styles.paragraph} paragraphText={Strings.ST10} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // alignItems: 'center',
        // justifyContent: "center"
    },
    paragraph: {
        color: Colors.black,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
        fontStyle: 'normal'
    },
    image: {
        height: 51,
        width: 135,
        alignSelf: 'center',
        marginBottom: 20
    },
   
  
});

export default AboutScreen