import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather"

import Colors from "../../assets/Colors";
import Auc from "./Auc";
const User: React.FC = ({ followers }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.image} />
            </View> */}
            <View style={styles.userNameContainer}>
                {/* <Auc /> */}
                <Text style={styles.userName}>Rangar</Text>
                <Text>321 {followers}</Text>
            </View>
            {/* <TouchableOpacity style={styles.iconContainer}>
                <Feather name="edit" size={20} color={Colors.orange} style={styles.icon} onPress={() => navigation.navigate('Edit')} />
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'yellow',
        width: '25%',
        height: '100%',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // marginLeft: 10,
        marginRight: 5
    },
    userNameContainer: {
        backgroundColor: 'orange',
        width: '50%',
        height: '100%',
        justifyContent: 'center'
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.black,
        textTransform: 'capitalize'
    },
    iconContainer: {
        // backgroundColor: 'green',
        // width: '20%',
        height: '100%',
        marginTop: '10%'
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 10
    }
})

export default User