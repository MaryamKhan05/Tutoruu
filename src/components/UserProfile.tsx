import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../assets/Colors";

interface Props {
    followers: string;
    route: string;
}

const User: React.FC<Props> = ({ followers, route }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.userNameContainer}>
            <Text style={styles.userName}>Rangar</Text>
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
                <Text style={styles.followers}>321 {followers}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    userNameContainer: {
        // backgroundColor: 'orange',
        width: '50%',
        // height: '100%',
        justifyContent: 'center'
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.black,
        textTransform: 'capitalize'
    },
    followers: {
        color: Colors.orange
    }
})
export default User