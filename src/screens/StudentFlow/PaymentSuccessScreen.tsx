import React, { useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../../assets/Colors";
import Completion from "../../components/Completion";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import PaymentCard from "../../components/PaymentCard";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const SuccessScreen: React.FC = () => {
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
            <Spacer />
            <Header headerTitle="Payment" />
            <View style={styles.innerContainer}>
                <Completion image={require('../../../assets/payment.jpg')} text={Strings.ST41} color={Colors.orange} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={[styles.text, { marginLeft: '5%' }]}> {Strings.ST42} </Text>
                    <Text style={[styles.text, { marginRight: '5%', fontWeight: 'bold' }]}>324 ECP</Text>
                    <Text style={styles.text}> {Strings.ST43} </Text>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{Strings.ST44} </Text>
                </View>
                <Spacer />
                <Divider />
                <Spacer />
                <Spacer />
                <PaymentCard text={Strings.ST48}/>
                <Spacer/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} > {Strings.ST49} </Text>
                </TouchableOpacity>
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
        width: '99%',
        height: '100%',
        alignSelf: 'center',
        margin: 10,
        marginTop: '30%'
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: Colors.black,
    },
    btn:{
        alignItems:'center'
    },
    btnText:{
        fontSize:14,
        fontWeight:'700',
        lineHeight:21,
        color:Colors.orange
    }

})

export default SuccessScreen