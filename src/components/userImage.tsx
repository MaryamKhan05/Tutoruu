import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native'

const UserImage: React.FC = () => {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: 'yellow',
        // width: '25%',
        // height: '100%',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // marginLeft: 10,
        marginRight: 5
    },
})
export default UserImage