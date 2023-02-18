import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";

const AUC: React.FC = () => {
    return (
        <Text>Category 1 </Text>
    )
}
const Category1: React.FC = () => {
    return (
        <Text>Category 2 </Text>
    )
}
const Category2: React.FC = () => {
    return (
        <Text>Category 3</Text>
    )
}
const Category3: React.FC = () => {
    return (
        <Text>Category 4 </Text>
    )
}
const ToggleButtons: React.FC = () => {
    const [selectedData, setSelectedData] = useState(AUC);
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'pink',
                    width: wp('100%')
                }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused1 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(AUC);
                        setFocused1(true);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(false);
                    }}>
                        <Text style={{ color: focused1 ? Colors.orange : Colors.black }} >AUC </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused2 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category1);
                        setFocused1(false);
                        setFocused2(true);
                        setFocused3(false);
                        setFocused4(false);
                    }}>
                        <Text style={{ color: focused2 ? Colors.orange : Colors.black }}>General </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused3 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category2);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(true);
                        setFocused4(false);
                    }}>
                        <Text style={{ color: focused3 ? Colors.orange : Colors.black }}>Questions </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused4 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category3);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(true);
                    }}>
                        <Text style={{ color: focused4 ? Colors.orange : Colors.black }}>Tips & Tricks</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* <Text>{selectedData}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        padding: hp('1'),
        margin: hp('0.5'),
        borderRadius: 99
    },
})
export default ToggleButtons