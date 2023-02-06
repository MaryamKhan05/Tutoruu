import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Heading:React.FC=({ title })=>{
    return (
        <Text style={styles.title}> {title}</Text>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:24,
        marginLeft:10
    }
})

export default Heading