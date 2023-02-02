import React from "react";
import { Text, StyleSheet } from 'react-native';
import Colors from "../../assets/Colors";

const Paragraph: React.FC = ({ paragraphStyle, paragraphText }) => {
    return (
        <Text style={styles.paragraph} >{paragraphText} </Text>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        color: Colors.black,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
        fontStyle: 'normal'
    },
})

export default Paragraph