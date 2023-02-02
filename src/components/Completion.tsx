import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Spacer from "./Spacer";


const Completion: React.FC = ({ image, imageStyle, text, textStyle }) => {

    return (
        <View>
            <Image source={image} style={imageStyle} />
            <Spacer/>
            <Text style={textStyle}> {text} </Text>
            <Spacer/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 106,
        width: 106,
        alignSelf: 'center',
    },
    heading: {
        color: Colors.orange,
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',

    },
})

export default Completion