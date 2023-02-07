import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


interface Props {
    headerTitle: string;
}
const Header: React.FC<Props> = ({ headerTitle }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Ionicons name="chevron-back" style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.header} > {headerTitle} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        fontSize: 18,
        marginLeft: 22
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
})

export default Header