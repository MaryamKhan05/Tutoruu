import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
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


                <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
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
                        <Text style={{ color: focused2 ? Colors.orange : Colors.black }}>CATEGORY 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused3 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category2);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(true);
                        setFocused4(false);
                    }}>
                        <Text style={{ color: focused3 ? Colors.orange : Colors.black }}>CATEGORY 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused4 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category3);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(true);
                    }}>
                        <Text style={{ color: focused4 ? Colors.orange : Colors.black }}>CATEGORY 3</Text>
                    </TouchableOpacity>
            </ScrollView>
                </View>
                {/* <Text>{selectedData}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    storyList: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    storyListText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    storyContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    storyImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    storyName: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    card: {
        padding: 20,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    cardBody: {
        flex: 1,
    },
    sender: {
        fontWeight: 'bold',
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    cardText: {
        marginTop: 10,
    },
    btn: {
        padding: 12,
        margin: 10,
        borderRadius: 99
    },
})

export default ToggleButtons