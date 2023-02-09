import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Spacer from "./Spacer";

interface Props {
    text: string;
    image: any;
    color:any;
}

const Completion: React.FC<Props> = ({ image, text, color }) => {

    return (
        <View>
            <Image source={image} style={styles.image} />
            <Spacer />
            <Text style={[styles.heading,{ color}]}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 106,
        width: 106,
        alignSelf: 'center',
    },
    text: {
        color: Colors.black,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        textAlign: 'center',
        width: 284,
        alignSelf: 'center'
    },
    heading: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
    }
})

export default Completion