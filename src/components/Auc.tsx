import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";


const Auc: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AUC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 30,
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