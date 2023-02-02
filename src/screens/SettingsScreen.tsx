import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";


import Colors from '../../assets/Colors';
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import { useTailwind } from "tailwind-rn/dist";
const SettingsScreen: React.FC = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    const tw = useTailwind();
    return (
        <SafeAreaView style={tw('h-full w-full')}>

            {/*--------------- HEADER SECTION--------- */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="chevron-back" style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.header} > {Strings.ST12} </Text>
            </View>

            {/* ----------------------------- */}


            <TouchableOpacity style={styles.bg}>
                <MaterialCommunityIcons name="lock" style={styles.icon} />
                <Text> {Strings.ST13} </Text>
                <Entypo name="chevron-right" style={styles.chevron} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bg}>
                <AntDesign name="logout" style={styles.icon} />
                <Text> {Strings.ST14} </Text>
                <Entypo name="chevron-right" style={styles.chevron} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bg}>
                <AntDesign name="warning" style={styles.icon} />
                <Text> {Strings.ST15} </Text>
                <Entypo name="chevron-right" style={styles.chevron} />
            </TouchableOpacity>

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
    bg: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between',
        backgroundColor: Colors.background,
        // backgroundColor:'red',
        width: 375,
        height: 64,
        marginTop: 5
    },
    back: {
        fontSize: 18,
        marginLeft: 22
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
    chevron: {
        fontSize: 20,
        // marginRight:15,
        marginLeft: '90%',
        position: 'absolute',
        // alignSelf:'flex-end'
    },
    icon: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20
    },
});

export default SettingsScreen