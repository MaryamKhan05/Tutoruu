import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


import Colors from "../../assets/Colors";
import Field from "./InputField";
const CreatePost: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: ('https://www.bootdey.com/img/Content/avatar/avatar1.png') }} />
            <Field width={250} borderRadius={50} />
            <TouchableOpacity style={styles.bubble}>
                <AntDesign
                    name="arrowright"
                    size={20}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 74,
        borderRadius: 20,
        alignSelf: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    bubble: {
        backgroundColor: Colors.orange,
        width: 44,
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CreatePost