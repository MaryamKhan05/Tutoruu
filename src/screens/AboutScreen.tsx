import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";



import Colors from '../../assets/Colors';
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';

const AboutScreen:React.FC = ({ navigation }) => {

    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="chevron-back" style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.header} > {Strings.ST11} </Text>
            </View>

            <View style={{marginTop:'70%'}}>
            <Image source={require('../../assets/logo.jpg')} style={styles.image} />
            <Text style={styles.paragraph} >{Strings.ST10}</Text>
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
        marginBottom:20
    },
    back: {
        fontSize: 18,
        marginLeft: 22
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
});

export default AboutScreen