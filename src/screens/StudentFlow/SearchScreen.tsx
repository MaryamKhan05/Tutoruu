import React, { useContext } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView
} from "react-native";


import Colors from "../../../assets/Colors";
import Bar from "../../components/Bar";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import CardList from "../../components/Flatlist";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';


const SearchScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (
        <SafeAreaView style={styles.container} >
            <Header headerTitle="Search" />
            <View style={styles.innerContainer}>
            <Spacer />
            <Bar/>
            <Spacer />
            <CardList view={Strings.ST31} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // backgroundColor:'red'
    },
    innerContainer: {
        width: '97%',
        height: '100%',
        alignSelf: 'center',
        // justifyContent: 'center',
        margin: 10,
        // backgroundColor:'red'
    },
})
export default SearchScreen