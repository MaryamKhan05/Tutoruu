import React from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Colors from "../../assets/Colors";


interface Props {
    height: number;
    width: number;
    borderRadius: number;

}
const Field: React.FC<Props> = ({ height, borderRadius, width }) => {
    return (
        <View>
            <TextInput
                placeholder="Doe.."
                placeholderTextColor={Colors.black}
                style={[styles.input, { height, borderRadius, width }]} />
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.gray,
        padding: 10,
        margin: 5
        // width: '90%',
        // alignSelf: 'center'
    },
})


export default Field