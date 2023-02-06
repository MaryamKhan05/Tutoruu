import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Bubble: React.FC = ({ icon }) => {
    return (
        <TouchableOpacity style={styles.bubble}>
            <View>{icon}</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bubble: {
        width: 44,
        height: 44,
        backgroundColor: Colors.lightorange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        marginRight: 15
    }
})

export default Bubble