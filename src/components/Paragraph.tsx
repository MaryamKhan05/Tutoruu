import React from "react";
import { Text, StyleSheet } from 'react-native';

const Paragraph: React.FC = ({ paragraphStyle, paragraphText }) => {
    return (
        <Text style={paragraphStyle} >{paragraphText} </Text>
    )
}

const styles = StyleSheet.create({})

export default Paragraph