import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Btn:React.FC = ({ text, route }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate(route)} >
            <Text style={styles.btnText} >{text}</Text>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnStyles: {
        backgroundColor: Colors.orange,
        width: 93,
        height: 33,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    btnText: {
        color: Colors.white,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        fontStyle: 'normal'
    },
});
export default Btn;