import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

import Colors from '../../../assets/Colors';
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
import Btn from "../../components/Button";


interface Props{
    navigation: any;
}

const SupportScreen: React.FC<Props> = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
    let Strings: any = {}
    if (contextState != null) {
  
      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts
  
        }
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.innerContainer}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons name="chevron-back" style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.header} > {Strings.ST16} </Text>
                </View>
                <View style={styles.para}>
                    <Text style={styles.text} >{Strings.ST17} </Text>
                    <Text style={[styles.text, { marginTop: 20 }]}>{Strings.ST18} </Text>
                </View>
                <Text style={styles.send}> {Strings.ST19} </Text>
                <Text style={styles.label}> {Strings.ST20} </Text>
                <TextInput placeholder="Doe.." style={styles.input} />
                <Text style={styles.label}> {Strings.ST21} </Text>
                <TextInput placeholder="Doe.." style={[styles.input, { height: 80, borderRadius: 20, paddingTop: 3 }]} />
                <Btn text='Submit' route='Payment' width={93} height={33} />
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
    innerContainer: {
        width: '95%',
        height: '100%',
        // backgroundColor: 'red', 
        alignSelf: 'center',
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
    para: {
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: 30,
        justifyContent: 'center',
        textAlign: 'center',
        width: 350,
        height: 126

    },
    text: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.black,
        // flexGrow: 1,
        // textAlign:'center'
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        fontStyle: 'normal',
        marginLeft: 20,
        margin: 5
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.gray,
        padding: 10,
        width: '95%',
        alignSelf: 'center'
    },
    send: {
        fontStyle: 'normal',
        fontWeight: '400',
        width: 350,
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 10,
        marginTop: '60%',
        marginBottom: 20
    }
});
export default SupportScreen