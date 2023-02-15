import React, { useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Completion from "../../components/Completion";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import PaymentCard from "../../components/PaymentCard";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';


const FailedScreen: React.FC = () => {
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
                <Completion image={require('../../../assets/failed.jpg')} text={Strings.ST50} color={Colors.black} />
                <Text style={styles.try}> {Strings.ST51} </Text>
                <Btn text={Strings.ST52} route={() => { }} width={270} height={41} />
                <Spacer />
                <Divider />
                <Spacer />
                <Spacer />
                <PaymentCard text={Strings.ST53} />
                <Spacer />
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
    btn: {
        alignItems: 'center'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.orange
    },
    try: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        color: Colors.black
    }
})
export default FailedScreen