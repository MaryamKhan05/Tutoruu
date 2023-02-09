import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import Colors from "../../assets/Colors";


interface Props {
   
    width: number;
    borderRadius: number;

}
const Field: React.FC<Props> = ({ borderRadius, width }) => {
    return (
        <View>
            <TextInput
                placeholder="Doe.."
                placeholderTextColor={Colors.black}
                style={[styles.input, { borderRadius, width }]} />
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
    },
})


export default Field