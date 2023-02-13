import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


interface Props {
    headerTitle: string;
}
const Header: React.FC<Props> = ({ headerTitle }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <FontAwesome name="chevron-left" style={styles.back} />
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