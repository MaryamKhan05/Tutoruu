import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const TextComponent:React.FC=({text})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
width:'70%',
marginLeft:7
    },
    text:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:21,
        color:Colors.black,
        marginLeft:10
    }
})
export default TextComponent