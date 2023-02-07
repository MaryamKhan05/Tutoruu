import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

interface Props{
    width: number;
    height: number;
    text: string;
}


const Auc: React.FC<Props> = ({ width, height, text }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: 50,
        // height: 30,
        backgroundColor: Colors.lightorange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99
    },
    text: {
        color: Colors.orange
    }
})

export default Auc