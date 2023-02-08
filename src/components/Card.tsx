import React from "react";
import { View, StyleSheet } from 'react-native';
import Colors from "../../assets/Colors";

interface Props {
    cardWidth: number;
    cardHeight: number;
}

const Card: React.FC<Props> = ({ cardWidth, cardHeight }) => {
    return (

        <View style={[styles.card, { width: '50%', height: '50%' }]}>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        alignItems: 'center'
    }
})

export default Card