import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Colors from "../../assets/Colors";
import Box from "../components/Box";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Spacer from "../components/Spacer";
import TextComponent from "../components/Text";
import User from "../components/UserProfile";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import UserImage from "../components/userImage";
const ProfileScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.innerContainer} >
                <Header headerTitle={Strings.ST30} />
                <Spacer />
                <View style={{flexDirection:'row'}}>
                    <UserImage />
                    <User followers={Strings.ST32} />
                </View>

                <Box text={Strings.ST25} />
                <Spacer />
                <Heading title={Strings.ST26} />
                <TextComponent text={Strings.ST29} />
                <Spacer />
                <Divider />
                <Spacer />
                <Section title={Strings.ST27} view={Strings.ST31} />
                <Spacer />
                <Divider />
                <Spacer />
                <Section title={Strings.ST28} view={Strings.ST31} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        // width: '97%'
    }
})

export default ProfileScreen