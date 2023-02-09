import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

interface Props {
    text: string;
}
const PaymentTag: React.FC<Props> = ({ text }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.container}>
                <Text style={styles.text}> {text} </Text>
            </View>
            <Text style={styles.time}>2:30 PM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightorange,
        // width: 71,
        height: 19,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    text: {
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 15,
        color: Colors.orange

    },
    time: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
    }
})

export default PaymentTag