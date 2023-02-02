import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from "../../assets/Colors";

const ProfileScreen: React.FC = () => {
    const [selectedData, setSelectedData] = useState(Screen1);
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);

    const Screen1: React.FC = () => {
        return (
            <Text>screen 1 </Text>
        )
    }
    const Screen2: React.FC = () => {
        return (
            <Text>screen 2 </Text>
        )
    }
    const Screen3: React.FC = () => {
        return (
            <Text>screen 3</Text>
        )
    }
    const Screen4: React.FC = () => {
        return (
            <Text>screen 4 </Text>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: focused1 ? Colors.orange : Colors.gray }]} onPress={() => {
                    setSelectedData(Screen1);
                    setFocused1(true);
                    setFocused2(false);
                    setFocused3(false);
                    setFocused4(false);
                }}>
                    <Text>Screen1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: focused2 ? Colors.orange : Colors.gray }]} onPress={() => {
                    setSelectedData(Screen2);
                    setFocused1(false);
                    setFocused2(true);
                    setFocused3(false);
                    setFocused4(false);
                }}>
                    <Text>Screen2 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: focused3 ? Colors.orange : Colors.gray }]} onPress={() => {
                    setSelectedData(Screen3);
                    setFocused1(false);
                    setFocused2(false);
                    setFocused3(true);
                    setFocused4(false);
                }}>
                    <Text>Screen3 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: focused4 ? Colors.orange : Colors.gray }]} onPress={() => {
                    setSelectedData(Screen4);
                    setFocused1(false);
                    setFocused2(false);
                    setFocused3(false);
                    setFocused4(true);
                }}>
                    <Text>Screen4</Text>
                </TouchableOpacity>
            </View>
            <Text>{selectedData}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        margin: 10
    },
})

export default ProfileScreen