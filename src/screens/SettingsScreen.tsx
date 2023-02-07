import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";


import Colors from '../../assets/Colors';
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import { useTailwind } from "tailwind-rn/dist";
import Header from "../components/Header";
import SettingsComponent from "../components/Settings";

interface Props{
    navigation: any;
}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    const tw = useTailwind();
    
    return (
        <SafeAreaView style={tw('h-full w-full')}>
            <Header headerTitle={Strings.ST12} />
            <SettingsComponent text={Strings.ST13} icon={<MaterialCommunityIcons name="lock" style={styles.icon} />} />
            <SettingsComponent text={Strings.ST14} icon={<AntDesign name="logout" style={styles.icon} />} />
            <SettingsComponent text={Strings.ST15} icon={<AntDesign name="warning" style={styles.icon} />} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center'
        // background: "flex-1 bg-white"
    },
    icon: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
    },
});

export default SettingsScreen