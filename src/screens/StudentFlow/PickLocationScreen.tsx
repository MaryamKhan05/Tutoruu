import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Header from "../../components/Header";
import Platfrom from "../../components/Platfrom";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
const PickLocation: React.FC = () => {
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

            <Header headerTitle={Strings.ST59} />
            <View style={styles.innerContainer}>

                <Spacer />
                <Spacer />
                <Platfrom />
               

            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // backgroundColor:'red'
    },
    innerContainer: {
        width: '99%',
        height: '90%',
        alignSelf: 'center',
        // margin: 10,
        // marginTop: '30%',
        // backgroundColor: 'yellow'
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
        padding: 15,
        margin: 20,
    },
    text: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    }
})

export default PickLocation